const matchSearchString = (str, searchTerm) => {
  return new RegExp(
    searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
    'i'
  ).test(str);
};

export default matchSearchString;
