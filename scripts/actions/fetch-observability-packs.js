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

const PACKS_FILE_PATH = './src/data/observability-packs.json';
const NR_GQL_URL = process.env.NR_GQL_URL;
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
              description
              iconUrl
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
    const results = await fetch(url, {
      method: 'post',
      body: JSON.stringify({ query: queryString }),
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': token,
      },
    }).then((res) => res.json());

    if (results.errors) {
      console.log('GRAPHQL Errors:', JSON.stringify(results.errors, null, 2));
    }

    return results.data.docs.openInstallation.observabilityPackSearch.results;
  } catch (error) {
    console.error('Encountered a problem querying the graphql api', error);
  }
};

/**
 * Writes a JSON file
 * @param {String} path the file path to write to
 * @param {Object|Object[]} packs the contents to write
 **/
const writePacks = (path, packs) => {
  console.log(`Writing ${path}`);
  fs.writeFileSync(path, JSON.stringify(packs, null, 2));
};

const validateEnvVars = () => {
  if (typeof NR_GQL_URL !== 'string') {
    throw new Error('NR_GQL_URL environment variable not set, exiting...');
  }

  if (typeof NR_API_TOKEN !== 'string') {
    throw new Error('NR_API_TOKEN environment variable not set, exiting...');
  }
};

const main = async () => {
  const results = await fetchPacks(packQuery, NR_GQL_URL, NR_API_TOKEN);

  if (results) {
    const packs = results.observabilityPacks;
    console.log(`Found ${packs.length} packs.`);
    writePacks(PACKS_FILE_PATH, packs);
  } else {
    console.log(
      'No packs were returned from the api, check the logs for errors.'
    );
  }
};

validateEnvVars();
main();

/* eslint-enable no-console */
