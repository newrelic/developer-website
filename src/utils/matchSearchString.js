const matchSearchString = (str, searchTerm) => {
  return new RegExp(searchTerm, 'i').test(str);
};

export default matchSearchString;
