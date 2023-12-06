const MATCH_SCREAMING_SNAKE_CASE = /^[A-Z_]+$/;

export default (name, sdk) => {
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
        value: JSON.stringify(value),
      };
    });
};
