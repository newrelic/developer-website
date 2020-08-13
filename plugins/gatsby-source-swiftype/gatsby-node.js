const fs = require('fs');
const createRelatedResourceNode = require('./src/createRelatedResourceNode');
const getRelatedResources = require('./src/getRelatedResources');

const writeableData = {};

exports.onPreBootstrap = (_, pluginOptions) => {
  const { file } = pluginOptions;

  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '{}');
  }
};

exports.onCreateNode = async (
  { actions, node, getNodesByType, createNodeId, createContentDigest },
  pluginOptions
) => {
  const { createNode, createParentChildLink } = actions;
  const { filterNode = () => false, getPath } = pluginOptions;

  if (node.internal.type !== 'Mdx' || !filterNode({ node })) {
    return;
  }

  const [
    {
      siteMetadata: { siteUrl },
    },
  ] = getNodesByType('Site');

  const pathname = getPath({ node });
  const resources = await getRelatedResources({ node, siteUrl }, pluginOptions);

  writeableData[pathname] = resources;

  resources.forEach((resource) => {
    const child = createRelatedResourceNode({
      parent: node.id,
      resource,
      createContentDigest,
      createNode,
      createNodeId,
    });

    createParentChildLink({ parent: node, child: child });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
  type RelatedResource implements Node {
    id: ID!
    title: String!
    url: String!
  }
  `;

  createTypes(typeDefs);
};

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    Mdx: {
      relatedResources: {
        args: {
          limit: {
            type: 'Int',
            defaultValue: 5,
          },
        },
        type: ['RelatedResource!'],
        resolve: (source, args, context) => {
          const { limit } = args;

          return context.nodeModel
            .getNodesByIds({ ids: source.children })
            .slice(0, Math.max(limit, 0));
        },
      },
    },
  });
};

exports.onPostBootstrap = (_, pluginOptions) => {
  const { refetch, file } = pluginOptions;

  if (refetch) {
    fs.writeFileSync(file, JSON.stringify(writeableData, null, 2));
  }
};
