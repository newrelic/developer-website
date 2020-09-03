const path = require(`path`);
const { execSync } = require('child_process');

const MAX_RESULTS = 5;

const getFileRelativePath = (absolutePath) =>
  absolutePath.replace(`${process.cwd()}/`, '');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions;

  const result = await graphql(`
    {
      allMdx(limit: 1000) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              path
              template
              redirects
              resources {
                url
              }
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
      context: {
        fileRelativePath: getFileRelativePath(node.fileAbsolutePath),
        guidesFilter:
          frontmatter.template === 'OverviewTemplate'
            ? `${frontmatter.path}/*`
            : undefined,
        relatedResourceLimit: Math.max(
          MAX_RESULTS - (frontmatter.resources || []).length,
          0
        ),
      },
    });
  });
};

exports.onCreateNode = ({ node, actions }) => {
  // if we don't have a relative path, attempt to get one
  if (node.internal.type === 'Mdx' && node.fileAbsolutePath) {
    const gitAuthorTime = execSync(
      `git log -1 --pretty=format:%aI ${node.fileAbsolutePath}`
    ).toString();
    actions.createNodeField({
      node,
      name: 'gitAuthorTime',
      value: gitAuthorTime,
    });
  }

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

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    // The `debug` library is causing issues when building the site by including
    // invalid JS. This ensures the module resolves to the browser-capatible
    // source instead of the node source. See the following issue for this
    // recommendation:
    // https://github.com/escaladesports/legacy-gatsby-plugin-prefetch-google-fonts/issues/18
    plugins: [plugins.normalModuleReplacement(/^\.\/node\.js/, './browser.js')],
    externals: {
      tessen: 'Tessen',
    },
  });
};
