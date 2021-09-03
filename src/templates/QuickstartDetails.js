import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
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
  useInstrumentedHandler,
  Button,
  Icon,
  Link,
} from '@newrelic/gatsby-theme-newrelic';
import ImageGallery from '../components/ImageGallery';
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
} from '../data/constants';

const allowedElements = [
  'h1',
  'h2',
  'h3',
  'ol',
  'ul',
  'li',
  'p',
  'blockquote',
  'code',
  'a',
  'strong',
  'em',
  'hr',
];

const QuickstartDetails = ({ data, location }) => {
  const pack = data.quickstarts;
  const packUrl = pack.packUrl || QUICKSTARTS_REPO;
  const tessen = useTessen();
  const breadcrumbs = [
    {
      name: 'Instant Observability (I/O)',
      url: '/instant-observability/',
    },
    {
      name: pack.name,
    },
  ];
  const handleInstallClick = useInstrumentedHandler(
    () => {
      tessen.track('observabilityPack', 'packInstall', {
        packName: pack.name,
        packId: pack.id,
      });
    },
    {
      actionName: 'packInstall',
      packName: pack.name,
      packId: pack.id,
    }
  );

  return (
    <>
      <DevSiteSeo
        title={pack.name}
        type="quickstarts"
        location={location}
        quickStartName={pack.title}
      />
      <Breadcrumbs segments={breadcrumbs} />
      <Tabs>
        <PageLayout type={PageLayout.TYPE.RELATED_CONTENT_TABS}>
          <PageLayout.Header
            title={pack.name}
            css={css`
              border-bottom: none;
              gap: 1rem;
            `}
          >
            <InstallButton quickstart={pack} onClick={handleInstallClick} />
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
            <Tabs.BarItem id="dashboards" count={pack.dashboards?.length ?? 0}>
              Dashboards
            </Tabs.BarItem>
            <Tabs.BarItem id="alerts" count={pack.alerts?.length ?? 0}>
              Alerts
            </Tabs.BarItem>
            <Tabs.BarItem
              id="data-sources"
              count={
                (pack.instrumentation?.length ?? 0) +
                (pack.documentation?.length ?? 0)
              }
            >
              Data sources
            </Tabs.BarItem>
          </Tabs.Bar>
          <Layout.Content>
            <Tabs.Pages>
              <Tabs.Page id="overview">
                <ImageGallery images={[]} />
                <h3>Description</h3>
                <Markdown skipHtml allowedElements={allowedElements}>
                  {pack.description}
                </Markdown>
              </Tabs.Page>
              <Tabs.Page id="dashboards">
                {pack.dashboards ? (
                  <QuickstartDashboards quickstart={pack} />
                ) : (
                  <EmptyTab
                    quickstartUrl={pack.packUrl}
                    quickstartName={pack.name}
                    tabName="dashboards"
                  />
                )}
              </Tabs.Page>
              <Tabs.Page id="alerts">
                {pack.alerts ? (
                  <QuickstartAlerts quickstart={pack} />
                ) : (
                  <EmptyTab
                    quickstartUrl={pack.packUrl}
                    quickstartName={pack.name}
                    tabName="alerts"
                  />
                )}
              </Tabs.Page>
              <Tabs.Page id="data-sources">
                {pack.documentation ? (
                  <QuickstartDataSources quickstart={pack} />
                ) : (
                  <EmptyTab
                    quickstartUrl={pack.packUrl}
                    quickstartName={pack.name}
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
            <PageTools.Section
              css={css`
                background-color: var(--divider-color);
              `}
            >
              <div>
                <Button
                  as={Link}
                  variant={Button.VARIANT.PRIMARY}
                  to={packUrl}
                  rel="noopener noreferrer"
                  instrumentation={{ packName: pack.name }}
                >
                  <Icon
                    name="fe-github"
                    css={css`
                      margin-right: 7px;
                    `}
                  />
                  View Repo
                </Button>
              </div>
            </PageTools.Section>
            <PageTools.Section>
              <PageTools.Title>How to use this quickstart</PageTools.Title>
              <ol>
                <li>
                  <Link to={SIGNUP_LINK}>Sign Up</Link> for a free New Relic
                  account (or <Link to={LOGIN_LINK}>Log In</Link> to your
                  existing account)
                </li>
                <li>Click the green install button above</li>
                <li>
                  Follow the instructions to install the necessary
                  instrumentation to get the data used in this quickstart
                </li>
                <li>
                  Enjoy the dashboards, alerts, and appications filled with
                  insights on our environment and services.
                </li>
              </ol>
            </PageTools.Section>
            <PageTools.Section>
              <PageTools.Title>Authors</PageTools.Title>
              <p>{pack.authors.join(', ')}</p>
            </PageTools.Section>
            <PageTools.Section>
              <PageTools.Title>Support</PageTools.Title>
              <h5
                css={css`
                  text-transform: uppercase;
                `}
              >
                {QUICKSTART_SUPPORT_CONTENT[`${pack.level}`].title}
              </h5>
              <p>
                <Markdown>
                  {QUICKSTART_SUPPORT_CONTENT[`${pack.level}`].content}
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
      id
      description
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
    }
  }
`;

export default QuickstartDetails;
