const splitWhen = (list, predicate) => {
  if (list.length === 0) {
    return [];
  }

  const idx = list.findIndex((item) => predicate(item));

  if (idx === -1) {
    return [list, []];
  }

  return [list.slice(0, idx), list.slice(idx)];
};

export default splitWhen;
