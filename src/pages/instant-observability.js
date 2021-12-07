import PropTypes from 'prop-types';
import React from 'react';
import QuickstartsPage from '../components/quickstarts/QuickstartsPage';

export const getServerData = async () => {
  const QUICKSTARTS_QUERY = `
{
  actor {
    nr1Catalog {
      quickstarts {
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

  try {
    const resp = await fetch(process.env.NERDGRAPH_URL, {
      method: 'POST',
      body: JSON.stringify({ query: QUICKSTARTS_QUERY }),
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': process.env.NEW_RELIC_API_KEY,
      },
    });

    const json = await resp.json();

    if (!resp.ok) {
      throw Error(`Non 200 status code returned`, json);
    }

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
