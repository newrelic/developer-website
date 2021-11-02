const path = require(`path`);
const { execSync } = require('child_process');
const { createFilePath } = require('gatsby-source-filesystem');
const resolveQuickstartSlug = require('./src/utils/resolveQuickstartSlug.js');

const kebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions;

  const result = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/src/markdown-pages/" } }) {
        edges {
          node {
            fields {
              fileRelativePath
              slug
            }
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

      allNewRelicSdkComponent {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }

      allNewRelicSdkApi {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }

      allQuickstarts {
        edges {
          node {
            fields {
              slug
            }
            id
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

  const {
    allMdx,
    allNewRelicSdkComponent,
    allNewRelicSdkApi,
    allQuickstarts,
  } = result.data;

  allMdx.edges.forEach(({ node }) => {
    const {
      frontmatter,
      fields: { fileRelativePath, slug },
    } = node;

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
      path: frontmatter.path
        ? path.join(frontmatter.path, '/')
        : path.join(slug, '/'),
      component: path.resolve(`src/templates/${frontmatter.template}.js`),
      context: {
        slug,
        fileRelativePath,
        guidesFilter:
          frontmatter.template === 'OverviewTemplate'
            ? `${frontmatter.path}/*`
            : undefined,
      },
    });
  });

  allQuickstarts.edges.forEach(({ node }) => {
    const {
      fields: { slug },
      id,
    } = node;

    createPage({
      path: path.join(slug, '/'),
      component: path.resolve('./src/templates/QuickstartDetails.js'),
      context: {
        id,
        layout: 'QuickStartLayout',
      },
    });
  });

  allNewRelicSdkComponent.edges.forEach(({ node }) => {
    const {
      fields: { slug },
    } = node;

    createPage({
      path: path.join(slug, '/'),
      component: path.resolve('./src/templates/ComponentReferenceTemplate.js'),
      context: {
        slug,
      },
    });
  });

  allNewRelicSdkApi.edges.forEach(({ node }) => {
    const {
      fields: { slug },
    } = node;

    createPage({
      path: path.join(slug, '/'),
      component: path.resolve('./src/templates/ApiReferenceTemplate.js'),
      context: {
        slug,
      },
    });
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const oldPage = { ...page };

  if (page.path === '/instant-observability/') {
    page.context.layout = 'QuickStartLayout';
  }
  deletePage(oldPage);
  createPage(page);
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx' && node.fileAbsolutePath) {
    const gitAuthorTime = execSync(
      `git log -1 --pretty=format:%aI ${node.fileAbsolutePath}`
    ).toString();
    actions.createNodeField({
      node,
      name: 'gitAuthorTime',
      value: gitAuthorTime,
    });

    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({ node, getNode, trailingSlash: false }),
    });
  }

  if (node.internal.type === 'NewRelicSdkComponent') {
    createNodeField({
      node,
      name: 'slug',
      value: `/components/${kebabCase(node.name)}`,
    });
  }

  if (node.internal.type === 'NewRelicSdkApi') {
    createNodeField({
      node,
      name: 'slug',
      value: `/apis/${kebabCase(node.name)}`,
    });
  }

  if (node.internal.type === 'Quickstarts') {
    createNodeField({
      node,
      name: 'slug',
      value: `${resolveQuickstartSlug(node.name, node.id)}`,
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
