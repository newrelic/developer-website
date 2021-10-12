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
            path
            redirects
          }
        }
      }
    }
  `);

  data.allMdx.nodes.forEach((node) => {
    const {
      frontmatter,
      fields: { fileRelativePath, slug },
    } = node;
    const { redirects } = frontmatter;
    const nodePath = frontmatter.path || slug;
    const pagePath = path.join(nodePath, 'embed', '/');
    const contentSourcePath = nodePath;

    createPage({
      path: pagePath,
      component: path.resolve(`src/templates/embedPage.js`),
      context: {
        slug,
        fileRelativePath,
        contentSourcePath,
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
