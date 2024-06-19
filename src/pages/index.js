import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import DevSiteSeo from '../components/DevSiteSeo';
import { Button, Link, Icon } from '@newrelic/gatsby-theme-newrelic';
import GuideListing from '../components/GuideListing/GuideListing';
import GuideTile from '../components/GuideTile/GuideTile';
import PageLayout from '../components/PageLayout';
import FeatherIcon from '../components/FeatherIcon';
import FeaturedGuideTile from '../components/FeaturedGuideTile';
import { PageContext } from '../components/PageContext';
import { pageContext } from '../types';
import Video from '../components/Video';

const getStartedGuides = [
  {
    duration: 5,
    title: 'Create custom events',
    description:
      'Define, visualize, and get alerts on the data you want using custom events',
    url: '/collect-data/custom-events',
    icon: <Icon name="nr-tdp" />,
  },
  {
    duration: 7,
    title: 'Add tags to apps',
    description: `Add tags to applications you instrument for easier filtering and organization`,
    url: '/automate-workflows/5-mins-tag-resources',
    icon: <Icon name="nr-automation" />,
  },
  {
    duration: 12,
    title: 'Build a Hello, World! app',
    description: `Build a Hello, World! app and publish it to your local New Relic One Catalog`,
    url: '/build-apps/build-hello-world-app',
    icon: <Icon name="nr-build-apps" />,
  },
];
const IndexPage = ({ data, pageContext, location }) => {
  const {
    allMdx: { nodes },
  } = data;
  const numberOfPromotedGuides = 6;
  const [guides, setGuides] = useState(() => nodes.slice(0, 6));
  const guidesMinusPromoted = nodes.length - numberOfPromotedGuides;
  return (
    <PageContext.Provider value={pageContext}>
      <DevSiteSeo location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title="Welcome to the New Relic developer site" />
        <PageLayout.Content>
          <section
            css={css`
              display: flex;
              justify-content: space-between;
              margin: 0 auto 2rem;

              @media (max-width: 1080px) {
                flex-direction: column;
              }
              color: var(--secondary-text-color);
              line-height: 1.75;

              li:not(:last-child) {
                margin-bottom: 0.5rem !important;
              }
            `}
          >
            <div
              css={css`
                flex: 1;
                margin-right: 1rem;
                margin-bottom: 1rem;
              `}
            >
              <p>
                New Relic is an all-in-one platform that captures performance
                data critical to your team's success. Whether you're a developer
                installing your first agent or you're ready to query already
                ingested data, our docs site can help you find the best solution
                for your performance needs:
              </p>
              <ul>
                <li>
                  Get started now with our{' '}
                  <Link
                    css={css`
                      display: inline-flex;
                      align-items: center;
                    `}
                    to="https://docs.newrelic.com/docs/new-relic-solutions/get-started/quick-launch-guide/"
                  >
                    Quick launch guide
                    <FeatherIcon
                      css={css`
                        margin-left: 0.25rem;
                      `}
                      name="external-link"
                    />
                  </Link>
                </li>
                <li>
                  Read more about New Relic in our{' '}
                  <Link
                    css={css`
                      display: inline-flex;
                    `}
                    to="https://docs.newrelic.com/docs/new-relic-solutions/new-relic-one/install-configure/install-new-relic/"
                  >
                    Welcome to New Relic
                  </Link>{' '}
                  doc.
                </li>
              </ul>
              <p>
                Or, if you're looking to build custom applications on top of our
                platform, keep exploring our developer site below.
              </p>
            </div>
            <div
              css={css`
                flex: 1;
                margin-top: 0;
                width: 100%;
                display: flex;
                justify-content: center;
              `}
            >
              <Video
                css={css`
                  width: 100%;
                `}
                id="Iu2g0QTuppM"
                type="youtube"
              />
            </div>
          </section>
          <section
            css={css`
              margin-top: 4rem;
              --surface-background-color: var(
                --secondary-surface-background-color
              );
              padding: 2rem;
              background: var(--secondary-background-color);
              border-radius: 4px;
            `}
          >
            <GuideListing
              css={css`
                --guide-list-row-height: auto;

                margin-top: 0;
              `}
            >
              <header
                css={css`
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  margin-bottom: 4rem;

                  @media (max-width: 789px) {
                    flex-direction: column;
                  }
                `}
              >
                <h2
                  css={css`
                    margin: 0;
                    margin-right: 1rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;

                    @media (max-width: 789px) {
                      margin-right: 0rem;
                    }
                  `}
                >
                  Get coding
                </h2>
                <Button
                  as={Link}
                  variant={Button.VARIANT.PRIMARY}
                  to="https://newrelic.com/signup?utm_source=developer-site"
                >
                  Create a free account
                </Button>
              </header>
              <GuideListing.List>
                {getStartedGuides.map((guide, index) => (
                  <FeaturedGuideTile key={index} guide={guide} />
                ))}
              </GuideListing.List>
            </GuideListing>
          </section>
          <section
            css={css`
              margin-top: 4rem;
            `}
          >
            <h2
              css={css`
                margin: 0;
                margin-right: 1rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;

                @media (max-width: 789px) {
                  margin-right: 0rem;
                }
              `}
            >
              Get inspired
            </h2>
            <GuideListing.List
              css={css`
                margin-top: 1rem;
              `}
            >
              {guides.map(({ fields, frontmatter }, index) => (
                <GuideTile
                  to={fields.slug}
                  key={index}
                  duration={frontmatter.duration}
                  title={frontmatter.tileShorthand?.title || frontmatter.title}
                  description={
                    frontmatter.tileShorthand?.description ||
                    frontmatter.description
                  }
                />
              ))}
            </GuideListing.List>
          </section>
          {guides.length === numberOfPromotedGuides && (
            <div
              css={css`
                display: flex;
                justify-content: center;
              `}
            >
              <Button
                css={css`
                  margin-top: 2rem;

                  &:hover {
                    transform: translateY(-1px);
                  }
                `}
                type="button"
                onClick={() => setGuides(nodes)}
                variant={Button.VARIANT.NORMAL}
              >
                {`Show ${guidesMinusPromoted} more guides`}
              </Button>
            </div>
          )}
          <p
            css={css`
              text-align: center;
              margin-top: 2rem;
            `}
          >
            Looking for more inspiration? Check out the{' '}
            <Link
              css={css`
                align-items: center;
              `}
              to="https://opensource.newrelic.com"
            >
              open source projects
              <FeatherIcon
                css={css`
                  margin-left: 0.25rem;
                `}
                name="external-link"
              />
            </Link>{' '}
            built by the New Relic community.
          </p>
        </PageLayout.Content>
      </PageLayout>
    </PageContext.Provider>
  );
};
IndexPage.propTypes = {
  data: PropTypes.object,
  pageContext,
  location: PropTypes.object.isRequired,
};
export const pageQuery = graphql`
  query {
    allMdx(
      filter: {
        frontmatter: {
          template: { eq: "GuideTemplate" }
          tileShorthand: { title: { ne: null } }
        }
      }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          description
          duration
          tileShorthand {
            title
            description
          }
        }
      }
    }
  }
`;
IndexPage.propTypes = {
  pageContext,
};
export default IndexPage;
