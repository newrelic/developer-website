'use strict';

/**
 * This script is used to query the New Relic GraphQL API for Observability Packs.
 * It then writes the array of Observability Packs to src/data/observability-packs.json
 * It requires the following environment variables to be set:
 * NR_GQL_URL - The New Relic GraphQL URL
 * NR_API_TOKEN - A New Relic personal API token
 **/

/* eslint-disable no-console */
const fs = require('fs');
const fetch = require('node-fetch');
const get = require('lodash.get');

const PACKS_FILE_PATH = './src/data/observability-packs.json';
const NR_API_URL = process.env.NR_API_URL;
const NR_API_TOKEN = process.env.NR_API_TOKEN;

const packQuery = `# gql 
  {
    docs {
      openInstallation {
        observabilityPackSearch {
          count
          results {
            observabilityPacks {
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
                url
                description
              }
              description
              iconUrl
              packUrl
              id
              level
              logoUrl
              name
              websiteUrl
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
const fetchPacks = async (queryString, url, token) => {
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

    return get(
      results,
      'data.docs.openInstallation.observabilityPackSearch.results'
    );
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
 * @param {String} query a graphql query for observability packs
 * @param {String} url the New Relic API endpoint
 * @param {String} token a New Relic API token
 **/
const main = async (query, url, token) => {
  const results = await fetchPacks(query, url, token);

  if (results) {
    const packs = results.observabilityPacks;
    console.log(`Found ${packs.length} packs.`);
    console.log(`Writing ${PACKS_FILE_PATH}`);
    fs.writeFileSync(PACKS_FILE_PATH, JSON.stringify(packs, null, 2));
  } else {
    console.log(
      'No packs were returned from the api, check the logs for errors.'
    );
    if (require.main === module) {
      process.exit(1);
    }
  }
};

if (require.main === module) {
  validateEnvVars();
  main(packQuery, NR_API_URL, NR_API_TOKEN);
}

module.exports = main;

/* eslint-enable no-console */
