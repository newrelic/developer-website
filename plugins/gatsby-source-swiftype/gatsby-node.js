const fs = require('fs');

exports.onPreBootstrap = ({ reporter }, pluginOptions) => {
  const { file } = pluginOptions;

  if (!fs.existsSync(file)) {
    reporter.info('gatsby-source-swiftype: Creating data file');

    fs.writeFileSync(file, '{}');
  }
};

exports.onCreatePage = async ({ page }, pluginOptions) => {
  const includePage = pluginOptions.filterPage || (() => false);

  if (includePage({ page })) {
    console.log(`Fetching ${page.path}`);
  }
};
