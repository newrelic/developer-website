const NR1_BASE_URL = 'https://one.newrelic.com';
const NR1_BASE_URL_LOCAL = 'https://dev-one.newrelic.com';
const NERDLET_PATH = `launcher/catalog-pack-details.launcher/`;
const NR1_EXPLORER_NERDLET = 'nr1-core.listing';

/**
 * @param {string} quickstartId The ID for an observability pack.
 * @param {boolean} [debug] If set to true, this will add `packages=local`.
 * @returns {string} The URL for the pack details within the platform.
 */
const getPackNr1Url = (quickstartId, nerdletId, debug = false) => {
  const pane = JSON.stringify({
    nerdletId,
    quickstartId,
  });

  // Note: this works differently depending on whether or not we have access
  // to the window object (and the btoa function).
  const hash =
    typeof window !== 'undefined' && window.btoa
      ? btoa(pane)
      : Buffer.from(pane, 'utf-8').toString('base64');

  const local = debug ? 'packages=local&' : '';
  const NR1_URL = debug ? NR1_BASE_URL_LOCAL : NR1_BASE_URL;

  const url = new URL(`${NERDLET_PATH}?${local}pane=${hash}`, NR1_URL);

  return url.href;
};

const getGuidedInstallStackedNr1Url = (nerdletId, debug = false) => {
  const pane = JSON.stringify({ nerdletId: NR1_EXPLORER_NERDLET });
  const card = JSON.stringify({
    nerdletId,
  });

  const hash =
    typeof window !== 'undefined' && window.btoa
      ? btoa(pane)
      : Buffer.from(pane, 'utf-8').toString('base64');

  const cardHash =
    window && window.btoa
      ? btoa(card)
      : Buffer.from(card, 'utf-8').toString('base64');

  const local = debug ? 'packages=local&' : '';
  const NR1_URL = debug ? NR1_BASE_URL_LOCAL : NR1_BASE_URL;

  const url = new URL(
    `${NERDLET_PATH}?${local}pane=${hash}&cards[0]=${cardHash}`,
    NR1_URL
  );

  return url.href;
};

module.exports = { getPackNr1Url, getGuidedInstallStackedNr1Url };
