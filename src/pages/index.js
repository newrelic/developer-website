import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
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
import * as styles from './index.module.scss';
import Video from '../components/Video';
import devChampionBadge from '../images/developer-champion/dev-champion-badge.png';
import podcastBadge from '../images/podcasts/podcasts-badge.png';

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
        <PageLayout.Header title="New Relic Instant Observability" />

        <PageLayout.Content>
          <section
            css={css`
              margin-top: 0;
            `}
            className={cx(styles.intro, 'intro-text')}
          >
            <div className={styles.introText}>
              <p>
                New Relic Instant Observability (I/O) helps you monitor your
                stack like a pro, without the burden of manual set up. Explore
                an open source ecosystem of 450+ quickstarts—out-of-the-box
                bundles of integrations, dashboards, and alerts—created by
                observability experts around the world, vetted by New Relic, and
                ready for you to install with one click.
                <br />
                <br />
                Didn't find what you're looking for? You're always{' '}
                <a href="https://github.com/newrelic/newrelic-quickstarts">
                  welcome to add contributions
                </a>{' '}
                or improve existing quickstarts to help others instantly monitor
                their services.
              </p>
              <p>
                <Button
                  as={Link}
                  variant={Button.VARIANT.PRIMARY}
                  to="https://newrelic.com/instant-observability"
                  instrumentation={{
                    navInteractionType: 'getQuickstartsButtonClick',
                  }}
                >
                  Get quickstarts
                </Button>
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
                id="33kreqnm3p"
                type="wistia"
              />
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
                  <FeaturedGuideTile key={index} guide={guide} />
                ))}
              </GuideListing.List>
            </GuideListing>
          </section>

          <section className={styles.section}>
            <h2 className={styles.guideListingHeading}>Get inspired</h2>
            <GuideListing.List className={styles.allGuidesListing}>
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
              <h2>New Relic developer champions</h2>
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
              css={css`
                padding: 1.25rem;
              `}
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
              <h2>New Relic Podcasts</h2>
              <p>
                We like to talk, especially to developers about developer
                things. Join us for conversations on open source, observability,
                software design and industry news.
              </p>
              <Button as={Link} variant={Button.VARIANT.PRIMARY} to="/podcasts">
                Listen
                <FeatherIcon
                  className={styles.externalLinkIcon}
                  name="external-link"
                />
              </Button>
            </div>
            <img src={podcastBadge} alt="podcast badge" />
          </section>
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
      sort: { fields: [frontmatter___promote, frontmatter___title] }
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
