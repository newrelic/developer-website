/**
 * Method to get the URL for a given pack.
 * @param {string} packName
 * @returns {string} URL for packName. If packName is falsy, URL returned
 * will be the parent directory under which all packs live
 */
const getPackUrl = (packName) => {
  let packUrl = new URL(
    'https://github.com/newrelic/newrelic-observability-packs/tree/main/packs/'
  );

  if (!packName) {
    return packUrl.href;
  }

  packUrl = new URL(packName, packUrl);
  return packUrl.href;
};

export default getPackUrl;
