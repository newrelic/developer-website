import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { css } from '@emotion/core';
import { graphql, Link } from 'gatsby';

import SEO from '../components/Seo';
import { Button, Video } from '@newrelic/gatsby-theme-newrelic';
import GuideListing from '../components/GuideListing/GuideListing';
import GuideTile from '../components/GuideTile/GuideTile';
import PageLayout from '../components/PageLayout';
import FeatherIcon from '../components/FeatherIcon';
import ExternalLink from '../components/ExternalLink';
import CollectDataIcon from '../components/CollectDataIcon';
import NewRelicIcon from '../components/NewRelicIcon';
import { PageContext } from '../components/PageContext';
import { pageContext } from '../types';
import styles from './index.module.scss';
import devChampionBadge from '../images/developer-champion/dev-champion-badge.png';
import podcastBadge from '../images/podcasts/podcasts-badge.png';
import Countdown from '../components/Countdown';

const getStartedGuides = [
  {
    duration: '5 min',
    title: 'Create custom events',
    description:
      'Define, visualize, and get alerts on the data you want using custom events',
    path: '/collect-data/custom-events',
    icon: <CollectDataIcon />,
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
        <PageLayout.Header title="Mark your calendar for Nerd Days 1.0" />

        <PageLayout.Content>
          <section
            css={css`
              margin-top: 0;
            `}
            className={cx(styles.intro, 'intro-text')}
          >
            <div className={styles.introText}>
              <p>
                Nerd Days is a <strong>FREE</strong> engineering conference that
                kicks off October 13 (Dates vary by region). Focused on building
                more perfect software, our goal is to spend less time looking at
                slides that tell you what software can do and more time on
                getting your hands on the software to solve problems
                efficiently.
              </p>
              <Countdown
                targetDate="October 13 2020 9:00:00 PDT"
                inactiveMessage="Countdown to Nerd Days"
              />
              <p>
                <Button
                  as={Link}
                  to="/nerd-days"
                  variant={Button.VARIANT.PRIMARY}
                >
                  Register
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
              <Video
                css={css`
                  width: inherit;
                `}
                id="yop0mw3otv"
                type="wistia"
              />
            </div>
          </section>

          <section className={cx(styles.section, styles.stripedSection)}>
            <GuideListing className={styles.guideListing}>
              <header className={styles.guideListingHeader}>
                <GuideListing.Heading
                  className={cx(styles.guideListingHeading)}
                >
                  Get coding
                </GuideListing.Heading>
                <Button
                  as={ExternalLink}
                  variant={Button.VARIANT.PRIMARY}
                  href="https://newrelic.com/signup?utm_source=developer-site"
                >
                  Create a free account
                </Button>
              </header>
              <GuideListing.List>
                {getStartedGuides.map((guide, index) => (
                  <GuideTile key={index} featured {...guide}>
                    <GuideTile.Button to={guide.path}>
                      Start the guide
                    </GuideTile.Button>
                  </GuideTile>
                ))}
              </GuideListing.List>
            </GuideListing>
          </section>

          <GuideListing className={styles.section}>
            <GuideListing.Heading className={styles.guideListingHeading}>
              Get inspired
            </GuideListing.Heading>
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
                  alignment={GuideTile.ALIGNMENT.LEFT}
                />
              ))}
            </GuideListing.List>
          </GuideListing>
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
            <ExternalLink
              className={styles.externalLink}
              href="https://opensource.newrelic.com"
            >
              open source projects
              <FeatherIcon
                className={styles.externalLinkIcon}
                name="external-link"
              />
            </ExternalLink>{' '}
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
                as={ExternalLink}
                variant={Button.VARIANT.PRIMARY}
                href="https://forms.gle/Zkdub5e1x4MNqSKW9"
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
