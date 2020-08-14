import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { graphql, Link } from 'gatsby';

import SEO from '../components/Seo';
import { Button } from '@newrelic/gatsby-theme-newrelic';
import GuideListing from '../components/GuideListing/GuideListing';
import GuideTile from '../components/GuideTile/GuideTile';
import PageLayout from '../components/PageLayout';
import Video from '../components/Video';
import FeatherIcon from '../components/FeatherIcon';
import ExternalLink from '../components/ExternalLink';
import { PageContext } from '../components/PageContext';
import { pageContext } from '../types';
import styles from './index.module.scss';
import devChampionBadge from '../images/developer-champion/dev-champion-badge.png';
import podcastBadge from '../images/podcasts/podcasts-badge.png';

const getStartedGuides = [
  {
    duration: '5 min',
    title: 'Create custom events',
    description:
      'Define, visualize, and get alerts on the data you want using custom events',
    path: '/collect-data/custom-events',
    icon: 'collectData',
  },
  {
    duration: '7 min',
    title: 'Add tags to apps',
    description: `Add tags to applications you instrument for easier filtering and organization`,
    path: '/automate-workflows/5-mins-tag-resources',
    icon: 'automation',
  },
  {
    duration: '12 min',
    title: 'Build a Hello, World! app',
    description: `Build a Hello, World! app and publish it to your local New Relic One Catalog`,
    path: '/build-apps/build-hello-world-app',
    icon: 'buildApps',
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
        <PageLayout.Header title="Contain the complexity - Observability made simple" />

        <PageLayout.Content>
          <section className={cx(styles.intro, 'intro-text')}>
            <div className={styles.introText}>
              <p>
                New Relic’s Kubernetes cluster explorer empowers Kubernetes
                nerds to move beyond infrastructure metrics and investigate
                deeper into applications, traces, logs, and events—with a single
                click—while staying grounded in a centralized UI. Join us at
                KubeCon and CloudNativeCon Europe August 17-20 to learn more.
              </p>

              <p>
                Check out the complete schedule of New Relic talks to make the
                most of your KubeCon experience.{' '}
                <Link to="/kubecon-europe-2020">Learn more.</Link>
              </p>
            </div>
            <Video
              className={styles.introVideo}
              id="8yJOYDTYml4"
              type="youtube"
              title="5 Steps for Kubernetes Observability"
            />
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
              >
                Nominate a developer champion
                <FeatherIcon
                  className={styles.externalLinkIcon}
                  name="external-link"
                />
              </Button>
              <Button
                as={Link}
                variant={Button.VARIANT.PLAIN}
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
