import PropTypes from 'prop-types';
import React from 'react';
import QuickstartsPage from '../components/quickstarts/QuickstartsPage';

const NERDGRAPH_URL = process.env.NERDGRAPH_URL;
const NEW_RELIC_API_KEY = process.env.NEW_RELIC_API_KEY;
const QUICKSTARTS_QUERY = `
{
  actor {
    nr1Catalog {
      quickstarts {
        totalCount
        results {
          id
          sourceUrl
          supportLevel
          metadata {
            slug
            summary
            authors {
              name
            }
            description
            displayName
            installer {
              type
              ... on Nr1CatalogInstallPlan {
                steps {
                  id
                  displayName
                }
              }
            }
            icon {
              url
            }
            keywords
            quickstartComponents {
              ... on Nr1CatalogQuickstartDocumentation {
                __typename
                metadata {
                  displayName
                  url
                  description
                }
              }
              ... on Nr1CatalogQuickstartDashboard {
                __typename
                metadata {
                  description
                  displayName
                  previews {
                    url
                  }
                }
              }
              ... on Nr1CatalogQuickstartAlertCondition {
                __typename
                metadata {
                  description
                  displayName
                  type
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
export const getServerData = async () => {
  try {
    const resp = await fetch(NERDGRAPH_URL, {
      method: 'POST',
      body: JSON.stringify({ query: QUICKSTARTS_QUERY }),
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': NEW_RELIC_API_KEY,
      },
    });

    if (!resp.ok) {
      throw Error(`Non 200 status code returned`, resp.status, resp.statusText);
    }

    const json = await resp.json();

    if (json.data?.errors) {
      throw Error(`Errors returned from nerdgraph`, json.data.errors);
    }

    const quickstarts = json.data?.actor?.nr1Catalog?.quickstarts;
    console.log(`Found ${quickstarts.totalCount} quickstarts`);

    return {
      props: {
        error: false,
        data: json.data,
      },
    };
  } catch (err) {
    /* eslint-disable-next-line no-console */
    console.error(err);

    return {
      props: {
        error: true,
      },
    };
  }
};

const QuickstartsPageSSR = ({ serverData, location }) => {
  const quickstarts =
    serverData.data?.actor?.nr1Catalog?.quickstarts?.results || [];

  return (
    <QuickstartsPage
      errored={serverData.error}
      quickstarts={quickstarts}
      location={location}
    />
  );
};

QuickstartsPageSSR.propTypes = {
  serverData: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default QuickstartsPageSSR;
