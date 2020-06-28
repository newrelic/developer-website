const MATCH_SCREAMING_SNAKE_CASE = /^[A-Z_]+$/;

exports.getConstants = (name, sdk) => {
  const obj = sdk[name];

  return Object.getOwnPropertyNames(obj)
    .filter(
      (member) =>
        MATCH_SCREAMING_SNAKE_CASE.test(member) &&
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
