export const range = (a, b) => [...Array(b + 1).keys()].slice(a);

export const partition = (arr, predicate) =>
  arr.reduce(
    ([truthy, falsey], item) =>
      predicate(item)
        ? [truthy.concat(item), falsey]
        : [truthy, falsey.concat(item)],
    [[], []]
  );
