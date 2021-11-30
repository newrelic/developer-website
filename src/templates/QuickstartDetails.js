import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import DevSiteSeo from '../components/DevSiteSeo';
import PropTypes from 'prop-types';
import PageLayout from '../components/PageLayout';
import Tabs from '../components/Tabs';
import EmptyTab from '../components/quickstarts/EmptyTab';
import SupportSection from '../components/quickstarts/SupportSection';
import QuickstartAlerts from '../components/quickstarts/QuickstartAlerts';
import QuickstartDashboards from '../components/quickstarts/QuickstartDashboards';
import {
  Layout,
  PageTools,
  useTessen,
  Button,
  Icon,
  Link,
  RelatedResources,
} from '@newrelic/gatsby-theme-newrelic';
import InstallButton from '../components/InstallButton';
import QuickstartDataSources from '../components/quickstarts/QuickstartDataSources';
import Breadcrumbs from '../components/Breadcrumbs';
import { quickstart } from '../types';
import {
  QUICKSTARTS_REPO,
  SIGNUP_LINK,
  LOGIN_LINK,
  SHIELD_LEVELS,
} from '../data/constants';
import QuickstartOverview from '../components/quickstarts/QuickstartOverview';

const QuickstartDetails = ({ data, location }) => {
  const quickstart = data.quickstarts;
  const quickstartUrl = quickstart.packUrl || QUICKSTARTS_REPO;
  const tessen = useTessen();
  const breadcrumbs = [
    {
      name: 'Instant Observability (I/O)',
      url: '/instant-observability/',
    },
    {
      name: quickstart.title,
    },
  ];
  const quickStartMeta = [
    {
      name: 'quick_start_name',
      class: 'swiftype',
      'data-type': 'string',
      content: quickstart.title,
    },
  ];

  const trackQuickstart = (action, quickstart) => () =>
    tessen.track({
      eventName: 'instantObservability',
      category: action,
      quickstartName: quickstart.name,
      quickstartId: quickstart.id,
      quickstartUrl: quickstart.packUrl,
    });

  const tessenTabTrack = (action, quickstart) => (id, count) => {
    tessen.track({
      eventName: 'instantObservability',
      category: action,
      QuickstartTabState: id,
      QuickstartTabCount: count,
      quickstartName: quickstart.name,
      quickstartId: quickstart.id,
    });
  };
  const tessenSupportTrack = (quickstart) => (action) => {
    tessen.track({
      eventName: 'instantObservability',
      category: action,
      quickstartName: quickstart.name,
      quickstartId: quickstart.id,
    });
  };

  return (
    <>
      <DevSiteSeo
        title={quickstart.title}
        type="quickstarts"
        location={location}
        tags={quickstart.keywords}
        meta={quickStartMeta}
      />
      <Breadcrumbs segments={breadcrumbs} />
      <Tabs>
        <PageLayout
          type={PageLayout.TYPE.RELATED_CONTENT_TABS}
          css={css`
            grid-template-columns: minmax(0, 1fr) 360px;
            margin-top: 1rem;
          `}
        >
          <PageLayout.Header
            title={quickstart.title}
            icon={
              SHIELD_LEVELS.includes(quickstart.level) && (
                <Icon
                  name="nr-check-shield"
                  size="50%"
                  css={css`
                    width: 0.75rem;
                    height: 1rem;
                    margin-left: 0.5rem;
                  `}
                />
              )
            }
            css={css`
              border-bottom: none;
              display: grid;
              grid-column-gap: 1rem;
              grid-row-gap: 1rem;
              grid-template-areas:
                'title logo'
                'summ logo'
                'cta logo';
              justify-content: normal;
              justify-self: center;
              row-gap: 1rem;
              width: 101%;

              h1 {
                font-weight: normal;
                grid-area: title;
                padding-bottom: 1rem;
              }

              @media (min-width: 760px) {
                background: var(--primary-background-color);
                border-bottom: 1px solid var(--border-color);
                border-radius: 0.25rem;
                grid-template-areas:
                  'logo title cta'
                  'logo summ cta';
                padding: 16px 0 24px;
                position: sticky;
                top: var(--global-header-height);
                z-index: 80;
              }

              .dark-mode {
                box-shadow: none;
              }
            `}
          >
            {quickstart.logoUrl && (
              <img
                src={quickstart.logoUrl}
                alt={quickstart.title}
                css={css`
                  max-height: 5rem;
                  grid-area: logo;
                  align-self: center;
                  justify-self: center;

                  .dark-mode & {
                    background-color: white;
                  }

                  @media (max-width: 760px) {
                    display: none;
                  }
                `}
              />
            )}
            {quickstart.summary && (
              <div
                css={css`
                  grid-area: summ;
                  max-width: 50vw;

                  @media (max-width: 760px) {
                    max-width: 100%;
                  }
                `}
              >
                {quickstart.summary}
              </div>
            )}
            <div
              css={css`
                grid-area: cta;
                display: flex;
                justify-content: center;
                align-self: center;
                @media (max-width: 760px) {
                  flex-direction: column;
                  align-items: stretch;
                }
              `}
            >
              <InstallButton quickstart={quickstart} location={location} />
              <Button
                as={Link}
                variant={Button.VARIANT.OUTLINE}
                to={quickstartUrl}
                rel="noopener noreferrer"
                css={css`
                  margin: 0 0 0 0.5rem;
                  @media (max-width: 760px) {
                    margin: 1rem 0 0 0;
                  }
                `}
                onClick={trackQuickstart('QuickstartViewRepoClick', quickstart)}
              >
                <Icon
                  name="fe-github"
                  css={css`
                    margin-right: 7px;
                  `}
                />
                View repo
              </Button>
            </div>
          </PageLayout.Header>
          <Tabs.Bar
            css={css`
              grid-column: 1/3;
              box-sizing: border-box;
              padding-right: 30%;
              @media (max-width: 1240px) {
                padding: 0;
              }
              @media (max-width: 760px) {
                flex-wrap: wrap;
              }
            `}
          >
            <Tabs.BarItem id="overview">Overview</Tabs.BarItem>
            <Tabs.BarItem
              id="dashboards"
              count={quickstart.dashboards?.length ?? 0}
              onClick={tessenTabTrack(`QuickstartTabToggle`, quickstart)}
            >
              Dashboards
            </Tabs.BarItem>
            <Tabs.BarItem
              id="alerts"
              count={quickstart.alerts?.length ?? 0}
              onClick={tessenTabTrack(`QuickstartTabToggle`, quickstart)}
            >
              Alerts
            </Tabs.BarItem>
            <Tabs.BarItem
              id="data-sources"
              count={
                (quickstart.instrumentation?.length ?? 0) +
                (quickstart.documentation?.length ?? 0)
              }
              onClick={tessenTabTrack(`QuickstartTabToggle`, quickstart)}
            >
              Data sources
            </Tabs.BarItem>
          </Tabs.Bar>
          <Layout.Content>
            <Tabs.Pages>
              <Tabs.Page id="overview">
                <QuickstartOverview quickstart={quickstart} />
              </Tabs.Page>
              <Tabs.Page id="dashboards">
                {quickstart.dashboards?.length > 0 ? (
                  <QuickstartDashboards quickstart={quickstart} />
                ) : (
                  <EmptyTab
                    quickstartUrl={quickstart.packUrl}
                    quickstartName={quickstart.title}
                    tabName="dashboards"
                  />
                )}
              </Tabs.Page>
              <Tabs.Page id="alerts">
                {quickstart.alerts?.length > 0 ? (
                  <QuickstartAlerts quickstart={quickstart} />
                ) : (
                  <EmptyTab
                    quickstartUrl={quickstart.packUrl}
                    quickstartName={quickstart.title}
                    tabName="alerts"
                  />
                )}
              </Tabs.Page>
              <Tabs.Page id="data-sources">
                {quickstart.documentation?.length > 0 ? (
                  <QuickstartDataSources quickstart={quickstart} />
                ) : (
                  <EmptyTab
                    quickstartUrl={quickstart.packUrl}
                    quickstartName={quickstart.title}
                    tabName="data sources"
                  />
                )}
              </Tabs.Page>
            </Tabs.Pages>
          </Layout.Content>
          <Layout.PageTools
            css={css`
              p,
              li {
                font-size: 0.85rem;
              }
              max-height: 100%;
              @media (min-width: 1240px) {
                width: 320px;
                justify-self: flex-end;
              }
            `}
          >
            <PageTools.Section>
              <div
                css={css`
                  background-color: var(--divider-color);
                  position: absolute;
                  top: 0;
                  left: 0;
                  padding: 1rem;
                  padding-top: 0.5rem;
                  height: 2.5rem;
                  width: 100%;
                `}
              >
                <PageTools.Title>How to use this quickstart</PageTools.Title>
              </div>
              <ol
                css={css`
                  margin-top: 2.5rem;
                `}
              >
                <li>
                  <Link
                    to={SIGNUP_LINK}
                    onClick={trackQuickstart(
                      'QuickstartDetailsSignUpClick',
                      quickstart
                    )}
                  >
                    Sign Up
                  </Link>{' '}
                  for a free New Relic account or{' '}
                  <Link
                    to={LOGIN_LINK}
                    onClick={trackQuickstart(
                      'QuickstartDetailsLoginClick',
                      quickstart
                    )}
                  >
                    Log In
                  </Link>{' '}
                  to your existing account.
                </li>
                <li>Click the green install button above.</li>
                <li>
                  Install the quickstart to get started or improve how you
                  monitor your environment. They’re filled with pre-built
                  resources like dashboards, instrumentation, and alerts.
                </li>
              </ol>
            </PageTools.Section>
            <aside
              data-swiftype-index={false}
              css={css`
                border-bottom: 1px solid var(--divider-color);
              `}
            />
            <PageTools.Section>
              <PageTools.Title>Authors</PageTools.Title>
              <p>{quickstart.authors.join(', ')}</p>
            </PageTools.Section>
            <aside
              data-swiftype-index={false}
              css={css`
                border-bottom: 1px solid var(--divider-color);
              `}
            />
            <PageTools.Section>
              <PageTools.Title>Support</PageTools.Title>
              <SupportSection
                supportLevel={quickstart.level}
                onClick={tessenSupportTrack(quickstart)}
              />
            </PageTools.Section>
            <aside
              data-swiftype-index={false}
              css={css`
                border-bottom: 1px solid var(--divider-color);
              `}
            />
            <PageTools.Section>
              <RelatedResources
                css={css`
                  padding: 0;
                `}
                resources={quickstart.relatedResources}
              />
            </PageTools.Section>
            <aside
              data-swiftype-index={false}
              css={css`
                border-bottom: 1px solid var(--divider-color);
              `}
            />
          </Layout.PageTools>
        </PageLayout>
      </Tabs>
    </>
  );
};

QuickstartDetails.propTypes = {
  data: PropTypes.shape({
    quickstarts: quickstart,
  }),
  location: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($id: String!) {
    quickstarts(id: { eq: $id }) {
      name
      title
      relatedResources(limit: 5) {
        title
        url
      }
      level
      keywords
      id
      description
      summary
      logoUrl
      packUrl
      dashboards {
        description
        name
        screenshots
        url
      }
      alerts {
        details
        name
        url
        type
      }
      documentation {
        name
        url
        description
      }
      authors
      installPlans {
        id
        name
      }
    }
  }
`;

export default QuickstartDetails;
