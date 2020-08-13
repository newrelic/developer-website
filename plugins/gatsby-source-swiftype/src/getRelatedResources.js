const fs = require('fs');
const search = require('./search');

module.exports = async ({ node, siteUrl }, pluginOptions) => {
  const {
    refetch,
    engineKey,
    pageLimit,
    file,
    getParams = () => ({}),
    getPath,
  } = pluginOptions;

  const pathname = getPath({ node });

  if (refetch) {
    return search(siteUrl + pathname, getParams({ node }), {
      engineKey,
      pageLimit,
    });
  }

  const data = JSON.parse(fs.readFileSync(file));

  return data[pathname] || [];
};
