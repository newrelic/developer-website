import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import DevSiteSeo from '../components/DevSiteSeo';
import PropTypes from 'prop-types';
import PageLayout from '../components/PageLayout';
import Tabs from '../components/Tabs';
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
import Intro from '../components/Intro';
import InstallButton from '../components/InstallButton';
import ImageSlider from '../components/ImageSlider';
import getPackUrl from '../utils/get-pack-url';
import Markdown from '../components/Markdown';
import pluralize from 'pluralize';

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

const SUPPORT_CONTENT = {
  NEWRELIC: {
    title: 'Built by New Relic',
    content: `Need help? [Visit our Support Center](https://support.newrelic.com) or check out our community forum, [the Explorers Hub](https://discuss.newrelic.com).`,
  },
  VERIFIED: {
    title: 'Verified by New Relic',
    content: `Need help? [Visit our Support Center](https://support.newrelic.com) or check out our community forum, [the Explorers Hub](https://discuss.newrelic.com).`,
  },
  COMMUNITY: {
    title: 'Built by the community',
    content: `Need help? Visit our community forum, [the Explorers Hub](https://discuss.newrelic.com) to find an answer or post a question.`,
  },
};

const ObservabilityPackDetails = ({ data, location }) => {
  const pack = data.observabilityPacks;
  const tessen = useTessen();
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
      <DevSiteSeo title={pack.name} location={location} />
      <Tabs>
        <PageLayout type={PageLayout.TYPE.RELATED_CONTENT_TABS}>
          <PageLayout.Header
            title={pack.name}
            css={css`
              border-bottom: none;
              gap: 1rem;
            `}
          >
            <InstallButton
              title="Install Pack"
              guid={pack.id}
              onClick={handleInstallClick}
            />
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
              disabled={!(pack.dashboards?.length ?? 0)}
              count={pack.dashboards?.length ?? 0}
            >
              Dashboards
            </Tabs.BarItem>
            <Tabs.BarItem
              id="alerts"
              disabled={!(pack.alerts?.length ?? 0)}
              count={pack.alerts?.length ?? 0}
            >
              Alerts
            </Tabs.BarItem>
            <Tabs.BarItem
              id="synthetics"
              disabled={!(pack.synthetics?.length ?? 0)}
              count={pack.synthetics?.length ?? 0}
            >
              Synthetics
            </Tabs.BarItem>
            <Tabs.BarItem
              id="visualizations"
              disabled={!(pack.visualizations?.length ?? 0)}
              count={pack.visualizations?.length ?? 0}
            >
              Visualizations
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
              <Tabs.Page id="requirements">
                <Intro
                  css={css`
                    margin-bottom: 16px;
                  `}
                >
                  Before you install the {pack.name} observability pack, make
                  sure you meet the requirements documented below.
                </Intro>
              </Tabs.Page>
              <Tabs.Page id="dashboards">
                {pack.dashboards?.map((dashboard) => (
                  <>
                    <h3>{dashboard.name}</h3>
                    <ImageSlider height={400} images={dashboard.screenshots} />
                    {dashboard.description && (
                      <>
                        <h4>Description</h4>
                        <p>{dashboard.description}</p>
                      </>
                    )}
                  </>
                ))}
                <Intro
                  css={css`
                    margin-bottom: 16px;
                  `}
                >
                  {pack.name} observability pack contains{' '}
                  {pluralize('dashboard', pack.dashboards?.length ?? 0, true)}.
                  These interactive visualizations let you easily explore your
                  data, understand context, and resolve problems faster.
                </Intro>
              </Tabs.Page>
              <Tabs.Page id="alerts">
                <Intro
                  css={css`
                    margin-bottom: 16px;
                  `}
                >
                  {pack.name} observability pack contains{' '}
                  {pluralize('alert', pack.alerts?.length ?? 0, true)}. These
                  alerts detect changes in key performance metrics. Integrate
                  these alerts with your favorite tools (like Slack, PagerDuty,
                  etc.) and New Relic will let you know when something needs
                  your attention.
                </Intro>
              </Tabs.Page>
              <Tabs.Page id="synthetics">
                <Intro
                  css={css`
                    margin-bottom: 16px;
                  `}
                >
                  {pack.name} observability pack includes{' '}
                  {pluralize(
                    'Synthetics check',
                    pack.synthetics?.length ?? 0,
                    true
                  )}
                  . These checks will run automatically to simulate user traffic
                  and ensure your site or API endpoint is not only available,
                  but fully functional.
                </Intro>
              </Tabs.Page>
              <Tabs.Page id="visualizations">
                <Intro
                  css={css`
                    margin-bottom: 16px;
                  `}
                >
                  {pack.name} observability pack includes{' '}
                  {pluralize(
                    'visualization',
                    pack.visualizations?.length ?? 0,
                    true
                  )}
                  . These charts have been customized to represent data in a way
                  that a standard dashboard isn’t able to, so you can monitor
                  what’s essential.
                </Intro>
              </Tabs.Page>
              <Tabs.Page id="nerdpacks">
                <Intro
                  css={css`
                    margin-bottom: 16px;
                  `}
                >
                  Nerdpacks are custom applications that extend the monitoring
                  capabilities of the New Relic One platform. {pack.name}
                  observability pack includes{' '}
                  {pluralize('Nerdpack', pack.nerdpacks?.length ?? 0, true)} to
                  make sure you’re monitoring what matters.
                </Intro>
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
                  to={getPackUrl(pack.logoUrl)}
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
              <PageTools.Title>How to use this pack</PageTools.Title>
              <ol>
                <li>
                  Sign up for a free New Relic account (or log in to your
                  existing account)
                </li>
                <li>Click the green install button above</li>
                <li>
                  Follow the instructions to install the necessary
                  instrumentation to get the data used in this pack
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
                {SUPPORT_CONTENT[`${pack.level}`].title}
              </h5>
              <p>
                <Markdown>{SUPPORT_CONTENT[`${pack.level}`].content}</Markdown>
              </p>
            </PageTools.Section>
            <PageTools.Section>
              <PageTools.Title>Requirements</PageTools.Title>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
            </PageTools.Section>
          </Layout.PageTools>
        </PageLayout>
      </Tabs>
    </>
  );
};

ObservabilityPackDetails.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($id: String!) {
    observabilityPacks(id: { eq: $id }) {
      name
      level
      id
      description
      logoUrl
      dashboards {
        description
        name
        screenshots
        url
      }
      authors
    }
  }
`;

export default ObservabilityPackDetails;
