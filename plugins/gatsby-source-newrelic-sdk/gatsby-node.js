const loadSdk = require('./src/loadSdk');
const { getComponentDoc, getApiDoc } = require('./src/docInfo');

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  { release, components = [], apis = [] }
) => {
  const { createNode } = actions;
  const sdk = await loadSdk(release);

  components.forEach((name) => {
    const data = getComponentDoc(name, sdk);

    if (data) {
      createNode({
        ...data,
        id: createNodeId(`NewRelicSdkComponent-${name}`),
        parent: null,
        children: [],
        internal: {
          type: 'NewRelicSdkComponent',
          contentDigest: createContentDigest(data),
        },
      });
    }
  });

  apis.forEach((name) => {
    const data = getApiDoc(name, sdk);

    if (data) {
      createNode({
        ...data,
        id: createNodeId(`NewRelicSdkApi-${name}`),
        parent: null,
        children: [],
        internal: {
          type: 'NewRelicSdkApi',
          contentDigest: createContentDigest(data),
        },
      });
    }
  });
};
