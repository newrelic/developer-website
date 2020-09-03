const IGNORED_PREVIEWS = ['Dropdown', 'Modal', 'Tooltip'];

exports.getExamples = (name, obj) => {
  return (obj[name].__docs__.tags.examples || []).map(
    ({ label, options, sourceCode }) => ({
      label,
      sourceCode,
      live: IGNORED_PREVIEWS.includes(name) ? false : options.live,
      preview: IGNORED_PREVIEWS.includes(name) ? false : options.live,
    })
  );
};
