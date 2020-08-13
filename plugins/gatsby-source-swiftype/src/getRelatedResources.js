const fs = require('fs');
const search = require('./search');

module.exports = async ({ node, siteUrl }, pluginOptions) => {
  const {
    enabled,
    engineKey,
    pageLimit,
    file,
    getParams = () => ({}),
    getPath,
  } = pluginOptions;

  const data = JSON.parse(fs.readFileSync(file));
  const params = getParams({ node });
  const pathname = getPath({ node });

  if (enabled) {
    return search(siteUrl + pathname, params, { engineKey, pageLimit });
  }

  return data[pathname] || [];
};
