const path = require(`path`);

const getFileRelativePath = (absolutePath) =>
  absolutePath.replace(`${process.cwd()}/`, '');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx(limit: 1000) {
        edges {
          node {
            fileAbsolutePath
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
      context: {
        fileRelativePath: getFileRelativePath(node.fileAbsolutePath),
      },
    });
  });
};

exports.onCreateNode = ({ node, actions }) => {
  // if we don't have a relative path, attempt to get one
  if (node.context && !node.context.fileRelativePath) {
    const { createPage } = actions;
    const { path, component } = node;

    createPage({
      path,
      component,
      context: {
        fileRelativePath: getFileRelativePath(component),
      },
    });
  }
};
