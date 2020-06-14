const loadSdk = require('./loadSdk');

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  { release, components = [], apis = [] }
) => {
  const { createNode } = actions;
  const sdk = await loadSdk(release);

  components
    .filter((name) => Boolean(sdk[name]))
    .forEach((name) => {
      const component = sdk[name];
      const data = {
        name,
        description: component.__docs__.text,
      };

      createNode({
        ...data,
        id: createNodeId(`SDKComponent-${name}`),
        parent: null,
        children: [],
        internal: {
          type: 'SDKComponent',
          contentDigest: createContentDigest(data),
        },
      });
    });

  apis
    .filter((name) => Boolean(sdk[name]))
    .forEach((name) => {
      const api = sdk[name];
      const data = {
        name,
        description: api.__docs__.text,
      };

      createNode({
        ...data,
        id: createNodeId(`SDKApi-${name}`),
        parent: null,
        children: [],
        internal: {
          type: 'SDKApi',
          contentDigest: createContentDigest(data),
        },
      });
    });
};
