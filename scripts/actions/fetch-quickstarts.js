'use strict';

/**
 * This script is used to query the New Relic GraphQL API for Quickstarts.
 * It then writes the array of Quickstarts to src/data/quickstarts.json
 * It requires the following environment variables to be set:
 * NR_GQL_URL - The New Relic GraphQL URL
 * NR_API_TOKEN - A New Relic personal API token
 **/

/* eslint-disable no-console */
const fs = require('fs');
const fetch = require('node-fetch');
const get = require('lodash.get');

const QUICKSTARTS_FILE_PATH = './src/data/quickstarts.json';
const NR_API_URL = process.env.NR_API_URL;
const NR_API_TOKEN = process.env.NR_API_TOKEN;

const quickstartQuery = `# gql 
  {
    docs {
      openInstallation {
        quickstartSearch {
          count
          results {
            quickstarts {
              authors
              dashboards {
                description
                name
                screenshots
                url
              }
              alerts {
                name
                details
                type
                url
              }
              documentation {
                name
                description
                url
              }
              description
              iconUrl
              packUrl
              id
              title
              level
              logoUrl
              name
              summary
              websiteUrl
              keywords
              installPlans {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * Queries graphql for the provided query
 * @param {String} queryString the graphql query to send
 * @param {String} url NR graphql endpoint
 * @param {String} token NR api token
 * @returns {Promise<Object[]|undefined>} returns the resulting array
 * or `undefined` if there was an error
 **/
const fetchQuickstarts = async (queryString, url, token) => {
  try {
    const res = await fetch(url, {
      method: 'post',
      body: JSON.stringify({ query: queryString }),
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': token,
      },
    });

    if (!res.ok) {
      throw new Error(`Received status code ${res.status} from the API`);
    }

    const results = await res.json();

    if (results.errors) {
      throw new Error(JSON.stringify(results.errors, null, 2));
    }

    return get(results, 'data.docs.openInstallation.quickstartSearch.results');
  } catch (error) {
    console.error('Encountered a problem querying the graphql api', error);
  }
};

const validateEnvVars = () => {
  if (typeof NR_API_URL !== 'string') {
    throw new Error('NR_GQL_URL environment variable not set, exiting...');
  }

  if (typeof NR_API_TOKEN !== 'string') {
    throw new Error('NR_API_TOKEN environment variable not set, exiting...');
  }
};

/*
 * @param {String} query a graphql query for quickstarts
 * @param {String} url the New Relic API endpoint
 * @param {String} token a New Relic API token
 **/
const main = async (query, url, token) => {
  const results = await fetchQuickstarts(query, url, token);

  if (results) {
    const quickstarts = results.quickstarts;
    console.log(`Found ${quickstarts.length} quickstarts.`);
    console.log(`Writing ${QUICKSTARTS_FILE_PATH}`);
    fs.writeFileSync(
      QUICKSTARTS_FILE_PATH,
      JSON.stringify(quickstarts, null, 2)
    );
  } else {
    console.log(
      'No quickstarts were returned from the api, check the logs for errors.'
    );
    if (require.main === module) {
      process.exit(1);
    }
  }
};

if (require.main === module) {
  validateEnvVars();
  main(quickstartQuery, NR_API_URL, NR_API_TOKEN);
}

module.exports = main;

/* eslint-enable no-console */
