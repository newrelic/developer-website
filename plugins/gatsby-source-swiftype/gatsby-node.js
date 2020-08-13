const fs = require('fs');
const search = require('./src/search');

exports.onCreateNode = async ({ node, getNodesByType }, pluginOptions) => {
  const {
    enabled,
    filterNode = () => false,
    getParams = () => ({}),
    getPath,
    pageLimit,
    engineKey,
    file,
  } = pluginOptions;

  if (!enabled || !filterNode({ node })) {
    return;
  }

  const [
    {
      siteMetadata: { siteUrl },
    },
  ] = getNodesByType('Site');

  const data = JSON.parse(fs.readFileSync(file));
  const params = getParams({ node });
  const pathname = getPath({ node });

  const result = await search(siteUrl + pathname, params, {
    engineKey,
    pageLimit,
  });

  fs.writeFileSync(
    file,
    JSON.stringify({ ...data, [pathname]: result }, null, 2, { flag: 'w' })
  );
};
