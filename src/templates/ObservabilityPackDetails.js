import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import PageLayout from '../components/PageLayout';
import FeatherIcon from '../components/FeatherIcon';
import DevSiteSeo from '../components/DevSiteSeo';
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
  console.log(data);
  const { pack, slug } = data.sitePage.context;

  return (
    <>
      {/* <DevSiteSeo
        title={title}
        description={description}
        tags={tags}
        location={location}
      /> */}
      <PageLayout type={PageLayout.TYPE.RELATED_CONTENT}>
        <PageLayout.Header title={pack.name}>
          {' '}
          <Button variant={Button.VARIANT.PRIMARY} size={Button.SIZE.MEDIUM}>
            Install
          </Button>
        </PageLayout.Header>
        <Layout.Content>
          {/* carousel component if we decide to use multiple images */}
          <img src={noImagePlaceholder} alt="placeholder" height="250px" />
          <h3>Description</h3>
          <p>{pack.description}</p>
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
            {/* probably want a component for the ratings */}
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
                Sign up for a free New Relic account (or log in to your existing
                account)
              </li>
              <li>Click the green install button above</li>
              <li>
                Follow the instructions to install the necessary instrumentation
                to get the data used in this pack
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
