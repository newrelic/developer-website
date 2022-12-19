const path = require(`path`);
const { execSync } = require('child_process');
const { createFilePath } = require('gatsby-source-filesystem');
const resolveQuickstartSlug = require('./src/utils/resolveQuickstartSlug.js');
const externalRedirects = require('./src/data/external-redirects.json');

const kebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();

// This is a temporary customization to ensure that the path field is always
// queryable from the createPages API. We rely on the path for deprecation
// warnings to inform authors that path is no longer a supported markdown
// property. Because of Gatsby's type inference from frontmatter properties, the
// query in createPages fails without this patch if no file contains a 'path'
// frontmatter property.
//
// This patch can be safely removed when removing the deprecation warning in
// createPages.
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type MdxFrontmatter {
      path: String
    }
  `;

  createTypes(typeDefs);
};

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
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const { allMdx, allNewRelicSdkComponent, allNewRelicSdkApi } = result.data;

  if (externalRedirects.length > 0) {
    externalRedirects.forEach(({ url, paths }) => {
      paths.forEach((path) => {
        createRedirect({
          fromPath: path,
          toPath: url,
          isPermanent: true,
          redirectInBrowser: true,
        });
      });
    });
  }

  createRedirect({
    fromPath: '/nerdlog/',
    toPath: '/changelog',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/nerd-bytes/',
    toPath: '/data-bytes',
    isPermanent: true,
  });

  createRedirect({
    fromPath: `/instant-observability/`,
    toPath: `https://newrelic.com/instant-observability`,
    isPermanent: true,
  });

  createRedirect({
    fromPath: `/instant-observability/*`,
    toPath: `https://newrelic.com/instant-observability/*`,
    isPermanent: true,
  });

  allMdx.edges.forEach(({ node }) => {
    const {
      frontmatter,
      fields: { fileRelativePath, slug },
    } = node;

    if (frontmatter.redirects) {
      frontmatter.redirects.forEach((fromPath) => {
        createRedirect({
          fromPath,
          toPath: slug,
          isPermanent: true,
          redirectInBrowser: true,
        });
      });
    }

    if (frontmatter.path) {
      const recommendedPath = path.join(
        'src/markdown-pages',
        fileRelativePath.endsWith('index.mdx')
          ? path.join(frontmatter.path, 'index.mdx')
          : `${frontmatter.path}.mdx`
      );

      const recommendation =
        recommendedPath === fileRelativePath
          ? "Please remove the 'path' property."
          : `To render this page at '${frontmatter.path}', please move this file to: '${recommendedPath}'.`;

      reporter.panicOnBuild(
        `
${fileRelativePath}

The 'path' property on frontmatter is deprecated and has no effect. URLs are now generated using the path of the file. ${recommendation}
`.trim()
      );
    }

    createPage({
      path: path.join(slug, '/'),
      component: path.resolve(`src/templates/${frontmatter.template}.js`),
      context: {
        slug,
        fileRelativePath,
        guidesFilter: ['OverviewTemplate', 'LabOverviewTemplate'].includes(
          frontmatter.template
        )
          ? `${slug}/*`
          : undefined,
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
