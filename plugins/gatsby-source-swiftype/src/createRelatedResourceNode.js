module.exports = ({
  createNode,
  createNodeId,
  createContentDigest,
  resource,
  parentPathname,
}) => {
  createNode({
    ...resource,
    id: createNodeId(`RelatedResource-${resource.url}`),
    parent: null,
    children: [],
    plugin: 'gatsby-source-swiftype',
    parentPathname,
    internal: {
      type: 'RelatedResource',
      content: JSON.stringify(resource),
      contentDigest: createContentDigest(resource),
    },
  });
};
