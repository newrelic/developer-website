const path = require(`path`);

const getFileRelativePath = (absolutePath) =>
  absolutePath.replace(`${process.cwd()}/`, '');

const kebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions;

  const result = await graphql(`
    {
      allNewRelicSdkApi {
        edges {
          node {
            fields {
              slug
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
      allMdx(limit: 1000) {
        edges {
          node {
            fileAbsolutePath
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

  const { allMdx, allNewRelicSdkApi, allNewRelicSdkComponent } = result.data;

  allNewRelicSdkApi.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/ApiReferenceTemplate.js'),
    });
  });

  allNewRelicSdkComponent.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('src/templates/ComponentReferenceTemplate.js'),
    });
  });

  allMdx.edges.forEach(({ node }) => {
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

    if (node.template !== 'ComponentReferenceTemplate') {
      createPage({
        path: frontmatter.path,
        component: path.resolve(`src/templates/${frontmatter.template}.js`),
        context: {
          fileRelativePath: getFileRelativePath(node.fileAbsolutePath),
          guidesFilter:
            frontmatter.template === 'OverviewTemplate'
              ? `${frontmatter.path}/*`
              : undefined,
        },
      });
    }
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

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
};
