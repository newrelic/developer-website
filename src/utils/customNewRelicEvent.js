const fetch = require('node-fetch');

const NEW_RELIC_ACCOUNT_ID = process.env.NEW_RELIC_ACCOUNT_ID;
const NEW_RELIC_API_KEY = process.env.NEW_RELIC_API_KEY;

/**
 * Helper function to make an API request to the Events API.
 *
 * @param {string} key New Relic API key
 * @param {string} accountId The New Relic account to send the request to
 * @param {Object} data The data to be sent
 * @returns {Promise<boolean>} Whether or not the request was (eventually) successful
 */
const apiRequest = async (key, accountId, data) => {
  const url = `https://insights-collector.newrelic.com/v1/accounts/${accountId}/events`;

  try {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': key,
      },
    });

    return true;
  } catch (e) {
    /* eslint-disable-next-line no-console */
    console.error('Unable to track custom event:', data, e);

    return false;
  }
};

/**
 * Tracks an event in New Relic using the custom Events API.
 *
 * @param {string} eventType The name of the event type to track
 * @param {Object} [metadata] (Optional) metadata to attach to the event
 * @returns {Promise<boolean>} Whether or not the request was (eventually) successful
 */
const track = async (eventType, metadata = {}) =>
  apiRequest(NEW_RELIC_API_KEY, NEW_RELIC_ACCOUNT_ID, {
    eventType,
    account: NEW_RELIC_ACCOUNT_ID,
    ...metadata,
  });

export default track;
