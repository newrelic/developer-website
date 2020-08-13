const fs = require('fs');

const appendTrailingSlash = (url) =>
  url.pathname.endsWith('/') ? url : new URL(`${url.pathname}/`, url.origin);

const stripTrailingSlash = (url) =>
  url.pathname.endsWith('/')
    ? new URL(url.replace(/\/$/, ''), url.origin)
    : url;

exports.onPreBootstrap = ({ reporter }, pluginOptions) => {
  const { file } = pluginOptions;

  if (!fs.existsSync(file)) {
    reporter.info('gatsby-source-swiftype: Creating data file');

    fs.writeFileSync(file, '{}');
  }
};

exports.onCreateNode = async ({ node, getNodesByType }, pluginOptions) => {
  const {
    filterNode = () => false,
    getParams,
    pageLimit,
    engineKey,
  } = pluginOptions;

  if (!filterNode({ node })) {
    return;
  }

  const [{ siteMetadata }] = getNodesByType('Site');
  const { siteUrl } = siteMetadata;
  const { path: pathname, filters = {}, ...params } = getParams({ node });
  const { page: pageFilters = {} } = filters;
  const url = new URL(pathname, siteUrl);

  const allParams = {
    ...params,
    engine_key: engineKey,
    per_page: pageLimit,
    filters: {
      ...filters,
      page: {
        ...pageFilters,
        url: [
          `!${appendTrailingSlash(url)}`,
          `!${stripTrailingSlash(url)}`,
          ...(pageFilters.url || []),
        ],
      },
    },
  };
};
