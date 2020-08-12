const fs = require('fs');
const path = require('path');

exports.onPreBootstrap = ({ reporter }, pluginOptions) => {
  const dataFile = path.join(pluginOptions.path, 'related-pages.json');

  if (!fs.existsSync(dataFile)) {
    reporter.info('Creating related-pages.json file');
    fs.writeFileSync(dataFile, '{}');
  }
};

exports.onCreatePage = async ({ page }, pluginOptions) => {
  const includePage = pluginOptions.filterPage || (() => false);

  if (includePage({ page })) {
    console.log(`Fetching ${page.path}`);
  }
};
