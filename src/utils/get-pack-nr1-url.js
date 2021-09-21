// FIXME: update this to production URL when deployed / launched
const NR1_BASE_URL = 'https://staging-one.newrelic.com';
const NR1_BASE_URL_LOCAL = 'https://dev-one.newrelic.com';
const NERDLET_PATH = `launcher/nr1-core.explorer/`;

/**
 * @param {string} packId The ID for an observability pack.
 * @param {boolean} [debug] If set to true, this will add `packages=local`.
 * @returns {string} The URL for the pack details within the platform.
 */
export const getPackNr1Url = (quickstartId, nerdletId, debug = false) => {
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

  const packDetailsUrl = new URL(
    `${NERDLET_PATH}?${local}pane=${hash}`,
    NR1_URL
  );

  return packDetailsUrl.href;
};

export const getGuidedInstallStackedNr1Url = (nerdletId, debug = false) => {
  const pane = JSON.stringify({ nerdletId: 'nr1-core.listing' });
  const card = JSON.stringify({ nerdletId });

  const paneHash =
    window && window.btoa
      ? btoa(pane)
      : Buffer.from(pane, 'utf-8').toString('base64');

  const cardHash =
    window && window.btoa
      ? btoa(card)
      : Buffer.from(card, 'utf-8').toString('base64');

  const local = debug ? 'packages=local&' : '';
  const NR1_URL = debug ? NR1_BASE_URL_LOCAL : NR1_BASE_URL;

  const guidedInstallUrl = new URL(
    `${NERDLET_PATH}?${local}pane=${paneHash}&cards[0]=${cardHash}`,
    NR1_URL
  );

  return guidedInstallUrl.href;
};
