const IGNORED_PROPERTIES = [
  'prototype',
  'length',
  'name',
  'propTypes',
  'getDerivedStateFromProps',
  'defaultProps',
];

exports.getConstants = (name, sdk) => {
  const obj = sdk[name];

  return Object.getOwnPropertyNames(obj)
    .filter(
      (member) =>
        !IGNORED_PROPERTIES.includes(member) &&
        typeof obj[member] !== 'function'
    )
    .map((member) => {
      const value = obj[member];

      return {
        name: `${name}.${member}`,
        type: Array.isArray(value) ? 'array' : typeof value,
        values: Array.isArray(value)
          ? value.map((el) => JSON.stringify(el))
          : Object.getOwnPropertyNames(value).map(
              (key) => `${key}: ${JSON.stringify(value[key])}`
            ),
      };
    });
};
