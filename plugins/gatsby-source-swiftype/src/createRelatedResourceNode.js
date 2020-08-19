module.exports = ({
  createNode,
  createNodeId,
  createContentDigest,
  resource,
  parent,
}) => {
  const node = {
    id: createNodeId(`RelatedResource-${resource.url}`),
    title: resource.title,
    url: resource.url,
    parent,
    children: [],
    plugin: 'gatsby-source-swiftype',
    internal: {
      type: 'RelatedResource',
      content: JSON.stringify(resource),
      contentDigest: createContentDigest(resource),
    },
  };

  createNode(node);

  return node;
};
