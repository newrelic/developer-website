const getExamples = require('./getExamples');

const IGNORED_METHODS = [
  'prototype',
  'length',
  'name',
  'propTypes',
  'getDerivedStateFromProps',
  'defaultProps',
  'render',
];

module.exports = (name, sdk) => {
  const obj = sdk[name];

  return Object.getOwnPropertyNames(obj)
    .filter(
      (member) =>
        !IGNORED_METHODS.includes(member) && typeof obj[member] === 'function'
    )
    .map((member) => {
      const methodDocs = obj[member].__docs__ || {};
      const tags = methodDocs.tags || {};

      return {
        name: `${name}.${member}`,
        description: methodDocs.text,
        returnValue: (tags.return || [])[0] || { type: 'undefined' },
        arguments: tags.param || [],
        examples: getExamples(member, obj),
      };
    });
};
