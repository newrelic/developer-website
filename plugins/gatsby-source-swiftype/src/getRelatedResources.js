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

  const pathname = getPath({ node });

  if (enabled) {
    return search(siteUrl + pathname, getParams({ node }), {
      engineKey,
      pageLimit,
    });
  }

  const data = JSON.parse(fs.readFileSync(file));

  return data[pathname] || [];
};
