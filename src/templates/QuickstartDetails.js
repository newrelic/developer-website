import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import DevSiteSeo from '../components/DevSiteSeo';
import PropTypes from 'prop-types';
import PageLayout from '../components/PageLayout';
import Tabs from '../components/Tabs';
import EmptyTab from '../components/quickstarts/EmptyTab';
import QuickstartAlerts from '../components/quickstarts/QuickstartAlerts';
import QuickstartDashboards from '../components/quickstarts/QuickstartDashboards';
import {
  Layout,
  PageTools,
  useTessen,
  Button,
  Icon,
  Link,
} from '@newrelic/gatsby-theme-newrelic';
import InstallButton from '../components/InstallButton';
import Markdown from '../components/Markdown';
import QuickstartDataSources from '../components/quickstarts/QuickstartDataSources';
import Breadcrumbs from '../components/Breadcrumbs';
import { quickstart } from '../types';
import {
  QUICKSTARTS_REPO,
  QUICKSTART_SUPPORT_CONTENT,
  SIGNUP_LINK,
  LOGIN_LINK,
  SHIELD_LEVELS,
} from '../data/constants';
import QuickstartOverview from '../components/quickstarts/QuickstartOverview';
import BetaBanner from '../components/quickstarts/BetaBanner';

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

  const writeCookie = () => {
    const currentEnvironment =
      process.env.ENV || process.env.NODE_ENV || 'development';
    const options = { expires: 1 /* days */ };
    if (currentEnvironment !== 'development') {
      options.domain = 'newrelic.com';
    }

    Cookies.set('newrelic-quickstart-id', quickstart.id, options);
  };

  const handleInstallClick = () => {
    writeCookie();
    tessen.track('instantObservability', 'QuickstartInstall', {
      quickstartName: quickstart.name,
      quickstartId: quickstart.id,
      quickstartUrl: quickstart.packUrl,
    });
  };

  const viewRepoClick = () =>
    tessen.track('instantObservability', 'QuickstartViewRepoClick', {
      quickstartName: quickstart.name,
      quickstartId: quickstart.id,
      quickstartUrl: quickstart.packUrl,
    });

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
      <BetaBanner />
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
              padding-bottom: 0;
              grid-template-areas: 'title logo' 'summ logo' 'cta logo';
              grid-column-gap: 1rem;
              grid-row-gap: 1rem;
              row-gap: 1rem;

              h1 {
                font-weight: normal;
                grid-area: title;
                padding-bottom: 1rem;
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
                  margin-bottom: 1em;
                  max-width: 40vw;

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
                justify-content: flex-start;
                @media (max-width: 760px) {
                  flex-direction: column;
                  align-items: stretch;
                }
              `}
            >
              <InstallButton
                quickstart={quickstart}
                onClick={handleInstallClick}
                location={location}
              />
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
                onClick={viewRepoClick}
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
            >
              Dashboards
            </Tabs.BarItem>
            <Tabs.BarItem id="alerts" count={quickstart.alerts?.length ?? 0}>
              Alerts
            </Tabs.BarItem>
            <Tabs.BarItem
              id="data-sources"
              count={
                (quickstart.instrumentation?.length ?? 0) +
                (quickstart.documentation?.length ?? 0)
              }
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
            `}
          >
            <PageTools.Section>
              <PageTools.Title>How to use this quickstart</PageTools.Title>
              <ol>
                <li>
                  <Link to={SIGNUP_LINK}>Sign Up</Link> for a free New Relic
                  account or <Link to={LOGIN_LINK}>Log In</Link> to your
                  existing account.
                </li>
                <li>Click the green install button above.</li>
                <li>
                  Install the quickstart to get started or improve how you
                  monitor your environment. They’re filled with pre-built
                  resources like dashboards, instrumentation, and alerts.
                </li>
              </ol>
            </PageTools.Section>
            <PageTools.Section>
              <PageTools.Title>Authors</PageTools.Title>
              <p>{quickstart.authors.join(', ')}</p>
            </PageTools.Section>
            <PageTools.Section>
              <PageTools.Title>Support</PageTools.Title>
              <h5
                css={css`
                  text-transform: uppercase;
                `}
              >
                {QUICKSTART_SUPPORT_CONTENT[`${quickstart.level}`].title}
              </h5>
              <p>
                <Markdown>
                  {QUICKSTART_SUPPORT_CONTENT[`${quickstart.level}`].content}
                </Markdown>
              </p>
            </PageTools.Section>
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
