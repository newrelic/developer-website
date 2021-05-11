const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

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
          }
          body
        }
      }
    }
  `);

  data.allMdx.nodes.forEach((node) => {
    const {
      frontmatter,
      fields: { fileRelativePath, slug },
      body,
    } = node;
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
  });
};
