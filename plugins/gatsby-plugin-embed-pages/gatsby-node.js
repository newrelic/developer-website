const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions;

  const { data } = await graphql(`
    query MyQuery {
      allMdx(filter: { frontmatter: { template: { eq: "GuideTemplate" } } }) {
        nodes {
          fields {
            fileRelativePath
            slug
          }
          frontmatter {
            title
            redirects
          }
        }
      }
    }
  `);

  data.allMdx.nodes.forEach((node) => {
    const {
      frontmatter: { redirects },
      fields: { fileRelativePath, slug },
    } = node;
    const pagePath = path.join(slug, 'embed', '/');

    createPage({
      path: pagePath,
      component: path.resolve(`src/templates/embedPage.js`),
      context: {
        slug,
        fileRelativePath,
        contentSourcePath: slug,
        layout: 'EmbedLayout',
      },
    });

    if (redirects) {
      redirects.forEach((fromPath) => {
        reporter.info(
          `Creating redirect for embed page: ${path.join(
            fromPath,
            'embed',
            '/'
          )}`
        );
        createRedirect({
          fromPath: path.join(fromPath, 'embed', '/'),
          toPath: pagePath,
          isPermanent: true,
          redirectInBrowser: true,
        });
      });
    }
  });
};
