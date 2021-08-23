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
import Markdown from '../components/Markdown';
import pluralize from 'pluralize';
import { quickstart } from '../types';
import { QUICKSTART_SUPPORT_LEVELS } from '../data/constants';

const { QUICKSTARTS_REPO } = require('../data/constants');

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
  [QUICKSTART_SUPPORT_LEVELS.NEWRELIC]: {
    title: 'Built by New Relic',
    content: `Need help? [Visit our Support Center](https://support.newrelic.com) or check out our community forum, [the Explorers Hub](https://discuss.newrelic.com).`,
  },
  [QUICKSTART_SUPPORT_LEVELS.VERIFIED]: {
    title: 'Verified by New Relic',
    content: `Need help? [Visit our Support Center](https://support.newrelic.com) or check out our community forum, [the Explorers Hub](https://discuss.newrelic.com).`,
  },
  [QUICKSTART_SUPPORT_LEVELS.COMMUNITY]: {
    title: 'Built by the community',
    content: `Need help? Visit our community forum, [the Explorers Hub](https://discuss.newrelic.com) to find an answer or post a question.`,
  },
};

/**
 * @param {quickstart} pack
 */
const renderDashboards = (pack) => {
  const content = pack.dashboards.map((dashboard, index) => (
    <>
      <h3 key={index}>{dashboard.name}</h3>
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

/**
 * @param {quickstart} pack
 */
const renderAlerts = (pack) => {
  const alertContent = pack.alerts.map((alert, index) => (
    <>
      <h3 key={index}>{alert.name}</h3>
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

/**
 * @param {quickstart} pack
 * @param {String} tabName
 */
const emptyStateContent = (pack, tabName) => {
  const packUrl = pack.packUrl || QUICKSTARTS_REPO;
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
        This pack doesn't include any {tabName}. Do you think it should?
        <br />
        You can edit this pack to add helpful components. View the repository
        and open a pull request.
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
    </div>
  );
};

const ObservabilityPackDetails = ({ data, location }) => {
  const pack = data.observabilityPacks;
  const packUrl = pack.packUrl || QUICKSTARTS_REPO;
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
                {pack.dashboards
                  ? renderDashboards(pack)
                  : emptyStateContent(pack, 'dasboards')}
              </Tabs.Page>
              <Tabs.Page id="alerts">
                {pack.alerts
                  ? renderAlerts(pack)
                  : emptyStateContent(pack, 'alerts')}
              </Tabs.Page>
              <Tabs.Page id="data-sources">
                {emptyStateContent(pack, 'data sources')}
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
  data: PropTypes.shape({
    observabilityPacks: quickstart,
  }),
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
      packUrl
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
