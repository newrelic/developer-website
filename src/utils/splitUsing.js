const splitUsing = (list, predicate) => {
  const { groups, items } = list.reduce(
    ({ groups, items }, item) => {
      if (predicate(item)) {
        return { groups: groups.concat([items.concat(item)]), items: [] };
      }

      return { groups: groups, items: items.concat(item) };
    },
    { groups: [], items: [] }
  );

  if (items.length > 0) {
    return [...groups, items];
  }

  return groups;
};

export default splitUsing;
