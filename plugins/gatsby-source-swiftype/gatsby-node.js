const fs = require('fs');
const search = require('./src/search');
const createRelatedResourceNode = require('./src/createRelatedResourceNode');

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
  const { createNode } = actions;
  const {
    enabled,
    filterNode = () => false,
    getParams = () => ({}),
    getPath,
    pageLimit,
    engineKey,
    file,
  } = pluginOptions;

  if (!enabled || node.internal.type !== 'Mdx' || !filterNode({ node })) {
    return;
  }

  const [
    {
      siteMetadata: { siteUrl },
    },
  ] = getNodesByType('Site');

  const data = JSON.parse(fs.readFileSync(file));
  const params = getParams({ node });
  const pathname = getPath({ node });
  const url = siteUrl + pathname;

  const resources = await search(url, params, {
    engineKey,
    pageLimit,
  });

  resources.forEach((resource) => {
    createRelatedResourceNode({
      parentPathname: pathname,
      resource,
      createContentDigest,
      createNode,
      createNodeId,
    });
  });

  fs.writeFileSync(
    file,
    JSON.stringify({ ...data, [pathname]: resources }, null, 2, { flag: 'w' })
  );
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

exports.createResolvers = ({ createResolvers }, pluginOptions) => {
  const { file } = pluginOptions;

  createResolvers({
    Mdx: {
      relatedResources: {
        type: ['RelatedResource!'],
        resolve(source, args, context, info) {
          return [];
        },
      },
    },
  });
};
