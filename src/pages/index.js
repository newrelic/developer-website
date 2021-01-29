import React, { useState, cloneElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';

import SEO from '../components/Seo';
import { Button, Link, Icon, Surface } from '@newrelic/gatsby-theme-newrelic';
import GuideListing from '../components/GuideListing/GuideListing';
import GuideTile from '../components/GuideTile/GuideTile';
import PageLayout from '../components/PageLayout';
import FeatherIcon from '../components/FeatherIcon';
import NewRelicIcon from '../components/NewRelicIcon';
import { PageContext } from '../components/PageContext';
import { pageContext } from '../types';
import styles from './index.module.scss';
import devChampionBadge from '../images/developer-champion/dev-champion-badge.png';
import podcastBadge from '../images/podcasts/podcasts-badge.png';
import Video from '../components/Video';

const getStartedGuides = [
  {
    duration: '5 min',
    title: 'Create custom events',
    description:
      'Define, visualize, and get alerts on the data you want using custom events',
    path: '/collect-data/custom-events',
    icon: <Icon name="nr-tdp" />,
  },
  {
    duration: '7 min',
    title: 'Add tags to apps',
    description: `Add tags to applications you instrument for easier filtering and organization`,
    path: '/automate-workflows/5-mins-tag-resources',
    icon: <NewRelicIcon name="automation" />,
  },
  {
    duration: '12 min',
    title: 'Build a Hello, World! app',
    description: `Build a Hello, World! app and publish it to your local New Relic One Catalog`,
    path: '/build-apps/build-hello-world-app',
    icon: <NewRelicIcon name="buildApps" />,
  },
];

const IndexPage = ({ data, pageContext }) => {
  const {
    allMdx: { nodes },
  } = data;
  const numberOfPromotedGuides = 6;
  const [guides, setGuides] = useState(() => nodes.slice(0, 6));
  const guidesMinusPromoted = nodes.length - numberOfPromotedGuides;

  return (
    <PageContext.Provider value={pageContext}>
      <SEO />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title="Getting started with New Relic and Terraform" />

        <PageLayout.Content>
          <section
            css={css`
              margin-top: 0;
            `}
            className={cx(styles.intro, 'intro-text')}
          >
            <div className={styles.introText}>
              <p>
                <a href="https://www.terraform.io/">Terraform</a> is a popular
                infrastructure-as-code software tool software tool software tool
                built by HashiCorp. You use it to provision all kinds of
                infrastructure and services, including New Relic alerts.
                <br />
                <br />
                In this guide, you learn how to set up New Relic alerts with
                Terraform. More specifically, you provision an alert policy,
                four alert conditions, and a notification channel.
              </p>
              <p>
                <Button
                  as={Link}
                  variant={Button.VARIANT.PRIMARY}
                  to="/automate-workflows/get-started-terraform"
                >
                  Get Started with Terraform
                </Button>
              </p>
            </div>
            <div
              css={css`
                flex: 1;
                margin-top: 0;
                width: 100%;
              `}
            >
              <Video id="vifxeilp2h" type="wistia" />
            </div>
          </section>

          <section className={cx(styles.section, styles.stripedSection)}>
            <GuideListing className={styles.guideListing}>
              <header className={styles.guideListingHeader}>
                <h2 className={cx(styles.guideListingHeading)}>Get coding</h2>
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
                  <Surface
                    key={index}
                    base={Surface.BASE.SECONDARY}
                    css={css`
                      display: grid;
                      grid-template-rows: auto 1fr auto;
                      border-radius: 0.25rem;
                      position: relative;
                      padding: 1rem;
                      transition: all 0.15s ease-out;
                    `}
                  >
                    <div
                      css={css`
                        position: absolute;
                        top: -2.75rem;
                        left: 50%;
                        margin-left: -2.75rem;
                        width: 5.5rem;
                        height: 5.5rem;
                        border: 4px solid var(--color-white);
                        background-color: var(--color-neutrals-200);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        .dark-mode & {
                          background-color: var(--color-dark-050);
                          border-color: var(--color-dark-100);
                        }
                      `}
                    >
                      {cloneElement(guide.icon, { size: '2.5rem' })}
                    </div>
                    <div
                      css={css`
                        display: grid;
                        grid-template-columns: 1fr auto;
                        grid-gap: 0.5rem;
                        align-items: baseline;
                      `}
                    >
                      <h3
                        css={css`
                          text-align: left;
                          margin-top: 0.5rem;
                        `}
                      >
                        {guide.title}
                      </h3>
                      <div
                        css={css`
                          font-size: 0.75rem;
                          display: flex;
                          align-items: center;
                          text-align: right;
                          color: var(--accent-text-color);
                          padding: 0.3rem 0 0.2rem 1.2rem;
                          justify-self: end;
                        `}
                      >
                        <Icon
                          css={css`
                            margin-right: 0.25rem;
                          `}
                          name="fe-clock"
                        />

                        {guide.duration}
                      </div>
                    </div>
                    <p
                      css={css`
                        font-size: 0.9rem;
                        margin-bottom: 1.5rem;
                        color: var(--secondary-text-color);
                        flex: 1;
                        text-align: left;
                        padding: 0;

                        &:last-child {
                          margin-bottom: 0;
                        }
                      `}
                    >
                      {guide.description}
                    </p>
                    <GuideTile.Button to={guide.path}>
                      Start the guide
                    </GuideTile.Button>
                  </Surface>
                ))}
              </GuideListing.List>
            </GuideListing>
          </section>

          <section className={styles.section}>
            <h2 className={styles.guideListingHeading}>Get inspired</h2>
            <GuideListing.List className={styles.allGuidesListing}>
              {guides.map(({ frontmatter }, index) => (
                <GuideTile
                  as={Link}
                  to={frontmatter.path}
                  key={index}
                  duration={frontmatter.duration}
                  title={frontmatter.tileShorthand?.title || frontmatter.title}
                  description={
                    frontmatter.tileShorthand?.description ||
                    frontmatter.description
                  }
                  path={frontmatter.path}
                />
              ))}
            </GuideListing.List>
          </section>
          {guides.length === numberOfPromotedGuides && (
            <div className={styles.buttonContainer}>
              <Button
                className={styles.expandGuides}
                type="button"
                onClick={() => setGuides(nodes)}
                variant={Button.VARIANT.NORMAL}
              >
                {`Show ${guidesMinusPromoted} more guides`}
              </Button>
            </div>
          )}

          <p className={styles.inspiration}>
            Looking for more inspiration? Check out the{' '}
            <Link
              className={styles.externalLink}
              to="https://opensource.newrelic.com"
            >
              open source projects
              <FeatherIcon
                className={styles.externalLinkIcon}
                name="external-link"
              />
            </Link>{' '}
            built by the New Relic community.
          </p>

          <section
            className={cx(
              styles.section,
              styles.stripedSection,
              styles.developerChampions
            )}
          >
            <div>
              <h1>New Relic developer champions</h1>
              <p>
                New Relic Champions are solving big problems using New Relic as
                their linchpin and are recognized as experts and leaders in the
                New Relic technical community.
              </p>
              <Button
                as={Link}
                variant={Button.VARIANT.PRIMARY}
                to="https://forms.gle/Zkdub5e1x4MNqSKW9"
                css={css`
                  margin-right: 0.5rem;
                `}
              >
                Nominate a developer champion
                <FeatherIcon
                  className={styles.externalLinkIcon}
                  name="external-link"
                />
              </Button>
              <Button
                as={Link}
                variant={Button.VARIANT.LINK}
                to="/developer-champion"
              >
                Learn more about developer champions
              </Button>
            </div>
            <img
              className={styles.img}
              src={devChampionBadge}
              alt="developer champion badge"
            />
          </section>

          <section
            className={cx(
              styles.section,
              styles.stripedSection,
              styles.developerChampions
            )}
          >
            <div>
              <h1>New Relic Podcasts</h1>
              <p>
                We like to talk, especially to developers about developer
                things. Join us for conversations on open source, observability,
                software design and industry news.
              </p>
              <Button as={Link} variant={Button.VARIANT.PRIMARY} to="/podcasts">
                Listen
                <FeatherIcon className={styles.Icon} name="link" />
              </Button>
            </div>
            <img
              className={styles.img}
              src={podcastBadge}
              alt="podcast badge"
            />
          </section>
        </PageLayout.Content>
      </PageLayout>
    </PageContext.Provider>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object,
  pageContext,
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
      sort: { fields: [frontmatter___promote, frontmatter___title] }
    ) {
      nodes {
        frontmatter {
          title
          description
          duration
          path
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
