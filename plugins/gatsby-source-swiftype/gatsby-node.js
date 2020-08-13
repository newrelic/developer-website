const fs = require('fs');
const search = require('./src/search');

const data = {};

exports.onCreateNode = async ({ node, getNodesByType }, pluginOptions) => {
  const {
    enabled,
    filterNode = () => false,
    getParams = () => ({}),
    getPath,
    pageLimit,
    engineKey,
  } = pluginOptions;

  if (!enabled || !filterNode({ node })) {
    return;
  }

  const [
    {
      siteMetadata: { siteUrl },
    },
  ] = getNodesByType('Site');

  const params = getParams({ node });
  const pathname = getPath({ node });
  const url = new URL(pathname, siteUrl);

  const result = await search(url, params, { engineKey, pageLimit });

  data[pathname] = result;
};

exports.onPostBootstrap = (_, pluginOptions) => {
  const { file, enabled } = pluginOptions;

  if (enabled) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2), { flag: 'w' });
  }
};
