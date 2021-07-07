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
} from '@newrelic/gatsby-theme-newrelic';
import ImageGallery from '../components/ImageGallery';
import Intro from '../components/Intro';
import InstallButton from '../components/InstallButton';
import ImageSlider from '../components/ImageSlider';
import Markdown from '../components/Markdown';

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
        <PageLayout type={PageLayout.TYPE.RELATED_CONTENT}>
          <PageLayout.Header
            title={pack.name}
            css={css`
              border-bottom: none;
              gap: 1rem;
            `}
          >
            <InstallButton
              title={`Install Pack`}
              guid={pack.id}
              onClick={handleInstallClick}
            />
            <Tabs.Bar
              css={css`
                margin-top: 1rem;
              `}
            >
              <Tabs.BarItem id="overview">Overview</Tabs.BarItem>
              <Tabs.BarItem id="requirements">Requirements</Tabs.BarItem>
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
              <Tabs.BarItem
                id="nerdpacks"
                disabled={!(pack.nerdpacks?.length ?? 0)}
                count={pack.nerdpacks?.length ?? 0}
              >
                Nerdpacks
              </Tabs.BarItem>
            </Tabs.Bar>
          </PageLayout.Header>

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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Intro>
              </Tabs.Page>
              <Tabs.Page id="dashboards">
                <Intro
                  css={css`
                    margin-bottom: 16px;
                  `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Intro>
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
              </Tabs.Page>
              <Tabs.Page id="alerts">
                <Intro
                  css={css`
                    margin-bottom: 16px;
                  `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Intro>
                {pack.alerts?.map((alert) => (
                  <>
                    <h3>{alert.name}</h3>
                    {alert.description && (
                      <>
                        <h4>Description</h4>
                        <p>{alert.description}</p>
                      </>
                    )}
                  </>
                ))}
              </Tabs.Page>
              <Tabs.Page id="synthetics">
                <Intro
                  css={css`
                    margin-bottom: 16px;
                  `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Intro>
              </Tabs.Page>
              <Tabs.Page id="visualizations">
                <Intro
                  css={css`
                    margin-bottom: 16px;
                  `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Intro>
              </Tabs.Page>
              <Tabs.Page id="nerdpacks">
                <Intro
                  css={css`
                    margin-bottom: 16px;
                  `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
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
