import React from 'react';
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
import relatedPages from '../data/related-pages.json';
import {
  QUICKSTARTS_REPO,
  SIGNUP_LINK,
  LOGIN_LINK,
  SHIELD_LEVELS,
} from '../data/constants';
import QuickstartOverview from '../components/quickstarts/QuickstartOverview';

const QuickstartDetails = ({ rawQuickstart, location }) => {
  const { metadata, id, sourceUrl, supportLevel } = rawQuickstart;

  const quickstartUrl = sourceUrl || QUICKSTARTS_REPO;
  const {
    displayName,
    slug,
    keywords,
    icon,
    summary,
    description,
    quickstartComponents,
    authors,
    installer,
  } = metadata;

  const sortedQuickstartComponents = quickstartComponents.reduce(
    (acc, component) => {
      switch (true) {
        case component.__typename === 'Nr1CatalogQuickstartDocumentation':
          acc.documentation.push(component.metadata);
          break;
        case component.__typename === 'Nr1CatalogQuickstartAlertCondition':
          acc.alerts.push(component.metadata);
          break;
        case component.__typename === 'Nr1CatalogQuickstartDashboard':
          acc.dashboards.push(component.metadata);
          break;
      }
      return acc;
    },
    { alerts: [], dashboards: [], documentation: [] }
  );

  const { alerts, dashboards, documentation } = sortedQuickstartComponents;

  const quickstart = {
    ...sortedQuickstartComponents,
    id,
    displayName,
    slug,
    description,
  };

  const relatedResources = relatedPages[`/instant-observability/${slug}/${id}`];

  const tessen = useTessen();
  const breadcrumbs = [
    {
      name: 'Instant Observability (I/O)',
      url: '/instant-observability/',
    },
    {
      name: displayName,
    },
  ];
  const quickStartMeta = [
    {
      name: 'quick_start_name',
      class: 'swiftype',
      'data-type': 'string',
      content: displayName,
    },
  ];

  const trackQuickstart = (action) => () =>
    tessen.track({
      eventName: 'instantObservability',
      category: action,
      quickstartName: slug,
      quickstartId: id,
      quickstartUrl: quickstartUrl,
    });

  const tessenTabTrack = (action) => (tabId, count) => {
    tessen.track({
      eventName: 'instantObservability',
      category: action,
      QuickstartTabState: tabId,
      QuickstartTabCount: count,
      quickstartName: slug,
      quickstartId: id,
    });
  };
  const tessenSupportTrack = () => (action) => {
    tessen.track({
      eventName: 'instantObservability',
      category: action,
      quickstartName: slug,
      quickstartId: id,
    });
  };

  return (
    <>
      <DevSiteSeo
        title={displayName}
        type="quickstarts"
        location={location}
        tags={keywords}
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
            title={displayName}
            icon={
              SHIELD_LEVELS.includes(supportLevel) && (
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
            {icon.url && (
              <img
                src={icon.url}
                alt={displayName}
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
            {summary && (
              <div
                css={css`
                  grid-area: summ;
                  max-width: 50vw;

                  @media (max-width: 760px) {
                    max-width: 100%;
                  }
                `}
              >
                {summary}
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
              <InstallButton installer={installer} location={location} />
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
              count={dashboards?.length ?? 0}
              onClick={tessenTabTrack(`QuickstartTabToggle`, quickstart)}
            >
              Dashboards
            </Tabs.BarItem>
            <Tabs.BarItem
              id="alerts"
              count={alerts?.length ?? 0}
              onClick={tessenTabTrack(`QuickstartTabToggle`, quickstart)}
            >
              Alerts
            </Tabs.BarItem>
            <Tabs.BarItem
              id="data-sources"
              count={documentation?.length ?? 0}
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
                {dashboards?.length > 0 ? (
                  <QuickstartDashboards
                    displayName={displayName}
                    dashboards={dashboards}
                  />
                ) : (
                  <EmptyTab
                    quickstartUrl={quickstartUrl}
                    quickstartName={displayName}
                    tabName="dashboards"
                  />
                )}
              </Tabs.Page>
              <Tabs.Page id="alerts">
                {alerts?.length > 0 ? (
                  <QuickstartAlerts alerts={alerts} displayName={displayName} />
                ) : (
                  <EmptyTab
                    quickstartUrl={quickstartUrl}
                    quickstartName={displayName}
                    tabName="alerts"
                  />
                )}
              </Tabs.Page>
              <Tabs.Page id="data-sources">
                {documentation?.length > 0 ? (
                  <QuickstartDataSources
                    displayName={displayName}
                    documentation={documentation}
                    id={id}
                    slug={slug}
                  />
                ) : (
                  <EmptyTab
                    quickstartUrl={quickstartUrl}
                    quickstartName={displayName}
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
              <p>{authors.map((author) => author.name).join(', ')}</p>
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
                supportLevel={supportLevel}
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
              {relatedResources && (
                <RelatedResources
                  css={css`
                    padding: 0;
                  `}
                  resources={relatedResources}
                />
              )}
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
  rawQuickstart: PropTypes.shape({
    metadata: PropTypes.shape({
      displayName: PropTypes.string,
      slug: PropTypes.string,
      keywords: PropTypes.array,
      icon: PropTypes.shape({ url: PropTypes.string }),
      summary: PropTypes.string,
      description: PropTypes.string,
      quickstartComponents: PropTypes.array,
      authors: PropTypes.array,
      installer: PropTypes.object,
    }),
    id: PropTypes.string,
    sourceUrl: PropTypes.string,
    supportLevel: PropTypes.string,
  }),
  location: PropTypes.object.isRequired,
};

export default QuickstartDetails;
