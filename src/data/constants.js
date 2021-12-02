export const githubBaseUrl = 'https://github.com/newrelic/developer-website';

export const SPLITS = {
  CONTRIBUTE_BUTTONS: 'developer-website_right-rail-buttons',
};

export const SPLIT_TRACKING_EVENTS = {
  RELATED_CONTENT_ACTION_CLICKED: 'related_content.contribute_action_clicked',
};

export const NERDGRAPH_URL = 'https://staging-api.newrelic.com/graphql';

export const SDK_BASE_URL =
  'https://d1zobbh8kytrtv.cloudfront.net/platform/doc-app';

export const NR1_PACK_DETAILS_NERDLET =
  'catalog-pack-details.catalog-pack-contents';

export const NR1_GUIDED_INSTALL_NERDLET =
  'nr1-install-newrelic.nr1-install-newrelic';

export const NR1_CODESTREAM_INSTALL_NERDLET = 'codestream-install.home';
export const CODESTREAM_QUICKSTART_ID = '29bd9a4a-1c19-4219-9694-0942f6411ce7';

export const NR1_EXPLORER_NERDLET = 'nr1-core.listing';

export const QUICKSTART_SUPPORT_LEVELS = {
  NEWRELIC: 'NEW_RELIC',
  VERIFIED: 'VERIFIED',
  COMMUNITY: 'COMMUNITY',
};

export const SUPPORT_LINK = 'https://support.newrelic.com';
export const COMMUNITY_LINK = 'https://discuss.newrelic.com';

export const QUICKSTART_ALERT_TYPES = {
  BASELINE: 'BASELINE',
  OUTLIER: 'OUTLIER',
  STATIC: 'STATIC',
};

export const SHIELD_LEVELS = ['NEW_RELIC', 'VERIFIED'];

export const QUICKSTARTS_REPO =
  'https://github.com/newrelic/newrelic-quickstarts';

export const SIGNUP_LINK = 'https://newrelic.com/signup';
export const LOGIN_LINK = 'https://login.newrelic.com/login';

export const UTM_PARAMETERS = { utm_medium: 'cpc' };

export const RESERVED_QUICKSTART_IDS = {
  GUIDED_INSTALL: 'GUIDED_INSTALL',
  BUILD_YOUR_OWN_QUICKSTART: 'BUILD_YOUR_OWN_QUICKSTART',
};

export const QUICKSTARTS_QUERY = `
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

export const QUICKSTART_QUERY = `
  actor {
    nr1Catalog {
      quickstart(id: $id) {
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
}`;
