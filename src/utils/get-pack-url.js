/**
 * Method to get the URL for a given pack.
 * @param {string} logoUrl
 * @returns {string} URL for pack. If logoUrl is falsy, URL returned
 * will be the parent directory under which all packs live.
 */
const getPackUrl = (logoUrl) => {
  let packUrl = new URL(
    'https://github.com/newrelic/newrelic-observability-packs/tree/main/packs/'
  );

  if (!logoUrl) {
    return packUrl.href;
  }

  /**
   * logoUrl looks something like: 'https://raw.githubusercontent.com/newrelic/newrelic-observability-packs/v0.8.2/packs/couchbase/logo.svg'
   */
  const [packName] = logoUrl.split('/').slice(-2, -1);
  packUrl = new URL(packName, packUrl);
  return packUrl.href;
};

export default getPackUrl;
