const IGNORED_PREVIEWS = ['Dropdown', 'Modal', 'Tooltip'];

module.exports = (name, obj) => {
  const docs = obj[name].__docs__ || {};
  const tags = docs.tags || {};

  return (tags.examples || []).map(({ label, options, sourceCode }) => ({
    label,
    sourceCode,
    live: IGNORED_PREVIEWS.includes(name) ? false : options.live,
    preview: IGNORED_PREVIEWS.includes(name) ? false : options.live,
  }));
};
