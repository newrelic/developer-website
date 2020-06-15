const IGNORED_PREVIEWS = ['Dropdown', 'Modal', 'Tooltip'];

exports.getExamples = (component) => {
  return (component.__docs__.tags.examples || []).map(
    ({ label, options, sourceCode }) => ({
      label,
      sourceCode,
      preview: IGNORED_PREVIEWS.includes(component.name) ? false : options.live,
    })
  );
};
