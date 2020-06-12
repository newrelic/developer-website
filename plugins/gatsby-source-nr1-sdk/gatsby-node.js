const loadSdk = require('./loadSdk');

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  { release, components = [], apis = [] }
) => {
  const { createNode } = actions;
  const sdk = await loadSdk(release);

  const documentedComponents = components
    .map((name) => ({ name, component: sdk[name] }))
    .filter(({ component }) => Boolean(component));

  const documentedAPIs = apis
    .map((name) => ({ name, api: sdk[name] }))
    .filter(({ api }) => Boolean(api));

  documentedComponents.forEach(({ name, component }) => {
    const data = {
      name,
      description: component.__docs__.text,
    };

    createNode({
      ...data,
      id: createNodeId(`NR1SdkComponent-${name}`),
      parent: null,
      children: [],
      internal: {
        type: 'NR1SdkComponent',
        contentDigest: createContentDigest(data),
      },
    });
  });

  documentedAPIs.forEach(({ name, api }) => {
    const data = {
      name,
      description: api.__docs__.text,
    };

    createNode({
      ...data,
      id: createNodeId(`NR1SdkAPI-${name}`),
      parent: null,
      children: [],
      internal: {
        type: 'NR1SdkAPI',
        contentDigest: createContentDigest(data),
      },
    });
  });
};
