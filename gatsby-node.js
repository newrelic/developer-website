const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions;

  const result = await graphql(`
    {
      allMdx(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              template
              redirects
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
    const { frontmatter } = node;

    if (frontmatter.redirects) {
      frontmatter.redirects.forEach((fromPath) => {
        createRedirect({
          fromPath,
          toPath: frontmatter.path,
          isPermanent: true,
          redirectInBrowser: true,
        });
      });
    }

    createPage({
      path: frontmatter.path,
      component: path.resolve(`src/templates/${frontmatter.template}.js`),
      context: {}, // additional data can be passed via context
    });
  });
};
