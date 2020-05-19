const path = require(`path`);

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }

    type MdxFrontmatter {
      items: [ItemValues]
      content: String @mdx
    }

    type ItemValues {
      value: String @mdx
    }
  `);
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              template
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/${node.frontmatter.template}.js`),
      context: {}, // additional data can be passed via context
    });
  });
};
