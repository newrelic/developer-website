import PropTypes from 'prop-types';
import React from 'react';
import QuickstartDetails from '../../../components/quickstarts/QuickstartDetails';

const QUICKSTART_QUERY = `
query QuickstartDetailsQuery(
      $quickstartId: ID!
)
{
  actor {
    nr1Catalog {
      quickstart(id: $quickstartId) {
        featured
        id
        metadata {
          authors {
            name
          }
          categories {
            displayName
            slug
            terms
          }
          categoryTerms
          description
          displayName
          icon {
            url
          }
          installer {
            type
            ... on Nr1CatalogInstallPlan {
              steps {
                description
                displayName
                id
              }
            }
          }
          keywords
          quickstartComponents {
            ... on Nr1CatalogQuickstartAlertCondition {
              id
              metadata {
                description
                displayName
                type
              }
              sourceUrl
            }
            ... on Nr1CatalogQuickstartDashboard {
              id
              metadata {
                description
                displayName
                previews {
                  url
                  ... on Nr1CatalogPreview {
                    url
                  }
                  ... on Nr1CatalogScreenshot {
                    url
                  }
                }
              }
              sourceUrl
            }
            ... on Nr1CatalogQuickstartDocumentation {
              metadata {
                description
                displayName
                url
              }
            }
          }
          slug
          summary
        }
        sourceUrl
        supportLevel
      }
    }
  }
}
`;

export const getServerData = async ({ params }) => {
  try {
    const resp = await fetch(process.env.NERDGRAPH_URL, {
      method: 'POST',
      body: JSON.stringify({
        query: QUICKSTART_QUERY,
        variables: { quickstartId: params.quickstartId },
      }),
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': process.env.NEW_RELIC_API_KEY,
      },
    });

    const json = await resp.json();

    if (!resp.ok) {
      throw Error(`Non 200 status code returned`, json);
    }

    if (json.data?.errors) {
      throw Error(`Errors returned from nerdgraph`, json.data.errors);
    }

    return {
      props: {
        error: false,
        data: json.data,
        pathname: `/instant-observability/${params.name}/${params.quickstartId}`,
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

const QuickstartDetailsSSR = ({ serverData, location }) => {
  const quickstart = serverData?.data?.actor?.nr1Catalog?.quickstart;

  return (
    <QuickstartDetails
      rawQuickstart={quickstart}
      error={serverData.error}
      location={location}
    />
  );
};

QuickstartDetailsSSR.propTypes = {
  serverData: PropTypes.object.isRequired,
  location: PropTypes.string,
};

export default QuickstartDetailsSSR;
