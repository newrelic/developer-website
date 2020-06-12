const loadSdk = require('./loadSdk');

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  { release }
) => {
  const { createNode } = actions;

  const sdk = await loadSdk(release);
  const { Button } = sdk;

  const data = {
    name: 'Button',
    description: Button.__docs__.text,
  };

  createNode({
    ...data,
    id: createNodeId('NR1SdkComponent-Button'),
    parent: null,
    children: [],
    internal: {
      type: 'NR1SdkComponent',
      contentDigest: createContentDigest(data),
    },
  });
};
