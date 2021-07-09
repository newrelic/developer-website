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

const renderDashboards = (pack) => {
  const content = pack.dashboards.map((dashboard) => (
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
  ));

  return (
    <>
      <Intro
        css={css`
          margin-bottom: 16px;
        `}
      >
        {pack.name} observability pack contains{' '}
        {pluralize('dashboard', pack.dashboards?.length ?? 0, true)}. These
        interactive visualizations let you easily explore your data, understand
        context, and resolve problems faster.
      </Intro>
      {content}
    </>
  );
};

const renderAlerts = (pack) => {
  const alertContent = pack.alerts.map((alert) => (
    <>
      <h3>{alert.name}</h3>
      {alert.description && (
        <>
          <h4>Description</h4>
          <p>{alert.description}</p>
        </>
      )}
    </>
  ));

  return (
    <>
      <Intro
        css={css`
          margin-bottom: 16px;
        `}
      >
        {pack.name} observability pack contains{' '}
        {pluralize('alert', pack.alerts?.length ?? 0, true)}. These alerts
        detect changes in key performance metrics. Integrate these alerts with
        your favorite tools (like Slack, PagerDuty, etc.) and New Relic will let
        you know when something needs your attention.
      </Intro>
      {alertContent}
    </>
  );
};

const renderSynthetics = (pack) => {
  return (
    <Intro
      css={css`
        margin-bottom: 16px;
      `}
    >
      {pack.name} observability pack includes{' '}
      {pluralize('Synthetics check', pack.synthetics?.length ?? 0, true)}. These
      checks will run automatically to simulate user traffic and ensure your
      site or API endpoint is not only available, but fully functional.
    </Intro>
  );
};

const renderVisualizations = (pack) => {
  return (
    <Intro
      css={css`
        margin-bottom: 16px;
      `}
    >
      {pack.name} observability pack includes{' '}
      {pluralize('visualization', pack.visualizations?.length ?? 0, true)}.
      These charts have been customized to represent data in a way that a
      standard dashboard isn’t able to, so you can monitor what’s essential.
    </Intro>
  );
};

const emptyStateContent = (pack) => {
  return (
    <div
      css={css`
        border: 1px solid var(--divider-color);
        border-radius: 0.25rem;
        padding: 1rem;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          padding: 2rem;
        `}
      >
        <Icon
          css={css`
            font-size: 4rem;
            color: var(--divider-color);
          `}
          name="edit"
        />
      </div>
      <p
        css={css`
          text-align: center;
        `}
      >
        I'm baby quinoa DIY narwhal artisan organic slow-carb cliche twee. Kogi
        YOLO meggings quinoa affogato vegan bespoke hashtag. VHS skateboard palo
        santo, gastropub edison bulb asymmetrical humblebrag plaid disrupt.
        Activated charcoal glossier kinfolk before they sold out pok pok quinoa
        bicycle rights humblebrag fanny pack church-key enamel pin.
      </p>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
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
    </div>
  );
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
            <Tabs.BarItem id="dashboards" count={pack.dashboards?.length ?? 0}>
              Dashboards
            </Tabs.BarItem>
            <Tabs.BarItem id="alerts" count={pack.alerts?.length ?? 0}>
              Alerts
            </Tabs.BarItem>
            <Tabs.BarItem id="synthetics" count={pack.synthetics?.length ?? 0}>
              Synthetics
            </Tabs.BarItem>
            <Tabs.BarItem
              id="visualizations"
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
              <Tabs.Page id="dashboards">
                {pack.dashboards
                  ? renderDashboards(pack.dashboards)
                  : emptyStateContent(pack)}
              </Tabs.Page>
              <Tabs.Page id="alerts">
                {pack.alerts
                  ? renderAlerts(pack.alerts)
                  : emptyStateContent(pack)}
              </Tabs.Page>
              <Tabs.Page id="synthetics">
                {pack.synthetics ? renderSynthetics() : emptyStateContent(pack)}
              </Tabs.Page>
              <Tabs.Page id="visualizations">
                {pack.visualizations
                  ? renderVisualizations()
                  : emptyStateContent(pack)}
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
