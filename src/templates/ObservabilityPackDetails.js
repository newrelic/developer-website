import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import PageLayout from '../components/PageLayout';
import FeatherIcon from '../components/FeatherIcon';
import Tabs from '../components/Tabs';
import noImagePlaceholder from '../images/no-image-placeholder.png';
import {
  Layout,
  PageTools,
  ExternalLink,
  Button,
} from '@newrelic/gatsby-theme-newrelic';

const exampleContributors = [
  { avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4' },
  { avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4' },
  { avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4' },
  { avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4' },
];

const ObservabilityPackDetails = ({ data }) => {
  const { pack } = data.sitePage.context;

  return (
    <>
      <Tabs>
        <PageLayout type={PageLayout.TYPE.RELATED_CONTENT}>
          <PageLayout.Header
            title={pack.name}
            css={css`
              border-bottom: none;
            `}
          >
            <Button variant={Button.VARIANT.PRIMARY} size={Button.SIZE.MEDIUM}>
              Install
            </Button>
            <Tabs.Bar
              css={css`
                margin-top: 1rem;
              `}
            >
              <Tabs.BarItem id="overview">Overview</Tabs.BarItem>
              <Tabs.BarItem id="dependencies">Dependencies</Tabs.BarItem>
              <Tabs.BarItem id="dashboards" count={3}>
                Dashboards
              </Tabs.BarItem>
              <Tabs.BarItem id="alerts" count={4}>
                Alerts
              </Tabs.BarItem>
              <Tabs.BarItem id="synthetics" disabled count={0}>
                Synthetics checks
              </Tabs.BarItem>
              <Tabs.BarItem id="visualizations" disabled count={0}>
                Visualizations
              </Tabs.BarItem>
              <Tabs.BarItem id="applications" count={1}>
                Applications
              </Tabs.BarItem>
            </Tabs.Bar>
          </PageLayout.Header>

          <Layout.Content>
            {/* carousel component if we decide to use multiple images */}
            <Tabs.Pages>
              <Tabs.Page id="overview">
                <img
                  src={noImagePlaceholder}
                  alt="placeholder"
                  height="250px"
                />
                <h3>Description</h3>
                <p>{pack.description}</p>
              </Tabs.Page>
              <Tabs.Page id="dashboards">
                {pack.dashboards.map((dashboard) => (
                  <>
                    <p>{dashboard.name}</p>
                    {dashboard.screenshots.map((screenshot, index) => (
                      <img
                        key={index}
                        alt="dashboard example"
                        src={screenshot}
                        css={css`
                          height: 200px;
                          margin: 1rem;
                        `}
                      />
                    ))}
                  </>
                ))}
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
              <PageTools.Title>Ratings and installs</PageTools.Title>
              {/* probably want a component for the ratings if we keep them */}
              <FeatherIcon
                name="star"
                size="2em"
                css={css`
                  color: gold;
                  fill: gold;
                `}
              />
              <FeatherIcon
                name="star"
                size="2em"
                css={css`
                  color: gold;
                  fill: gold;
                `}
              />
              <FeatherIcon
                name="star"
                size="2em"
                css={css`
                  color: gold;
                  fill: gold;
                `}
              />
              <FeatherIcon
                name="star"
                size="2em"
                css={css`
                  color: gold;
                  fill: gold;
                `}
              />
              <FeatherIcon
                name="star"
                size="2em"
                css={css`
                  color: lightgray;
                  fill: lightgray;
                `}
              />
              <p>37 ratings from 247 installs</p>
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
              <PageTools.Title>Contributors</PageTools.Title>
              <div
                css={css`
                  display: flex;
                  justify-content: space-between;
                  flex: 5;
                  width: 60%;
                  margin-bottom: 0.5rem;
                `}
              >
                {exampleContributors.map(({ avatar_url }) => (
                  <img
                    src={avatar_url}
                    key={avatar_url}
                    alt="github avatar"
                    css={css`
                      height: 35px;
                      border-radius: 50%;
                    `}
                  />
                ))}
              </div>
              <p>
                Want to contribute to this observability pack?{' '}
                <ExternalLink href="#">Go to the repo</ExternalLink>
              </p>
            </PageTools.Section>
          </Layout.PageTools>
        </PageLayout>
      </Tabs>
    </>
  );
};

ObservabilityPackDetails.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query($slug: String!) {
    sitePage(context: { slug: { eq: $slug } }) {
      context {
        slug
        pack {
          name
          website
          logo
          level
          id
          icon
          description
          alerts {
            name
            definition
            url
          }
          dashboards {
            description
            name
            screenshots
            url
          }
          authors
        }
      }
    }
  }
`;

export default ObservabilityPackDetails;
