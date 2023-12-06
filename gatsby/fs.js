const getFileRelativePath = (absolutePath, rootDir) =>
  absolutePath.replace(`${rootDir}/`, '');

module.exports = { getFileRelativePath };
