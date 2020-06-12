const loadSdk = require('./loadSdk');

exports.sourceNodes = async ({ actions }, { release }) => {
  // const { createNode } = actions;

  const sdk = await loadSdk(release);

  console.log(sdk);
};
