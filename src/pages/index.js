import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { graphql, Link } from 'gatsby';

import SEO from '../components/Seo';
import Button from '../components/Button';
import GuideListing from '../components/GuideListing/GuideListing';
import GuideTile from '../components/GuideTile/GuideTile';
import PageTitle from '../components/PageTitle';
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

// TODO: Remove the following after the guides have been created
// const guides = [
//   {
//     minutes: 25,
//     title: 'Provision with Terraform',
//     description: 'Provision an alert policy with notifications using Terraform',
//     path: '/',
//   },
//   {
//     minutes: 15,
//     title: ' Set up dev tools',
//     description: 'Get an API key, download the CLI, and start building apps',
//     path: '/build-apps/set-up-dev-env',
//   },
//   {
//     minutes: 30,
//     title: 'Add a table to your app',
//     description: 'Use New Relic One components to add a table to your app',
//     path: '/build-apps/howto-use-nrone-table-components',
//   },
// ];

const IndexPage = ({ data, pageContext }) => {
  const {
    allMdx: { nodes },
  } = data;
  const numberOfPromotedGuides = 6;
  const [guides, setGuides] = useState(() => nodes.slice(0, 6));
  const guidesMinusPromoted = nodes.length - numberOfPromotedGuides;

  return (
    <PageContext.Provider value={pageContext}>
      <>
        <SEO />
        <PageTitle>Observability for every developer</PageTitle>

        <section className={cx(styles.intro, 'intro-text')}>
          <div className={styles.introText}>
            <p>
              Whether you're new to New Relic or already a data nerd, you can
              start building right now. For free.
            </p>
            <p>
              With our platform as your foundation, create custom observability
              apps fast. Answer your unique questions, improve your software,
              and deliver new value to your business.
            </p>
            <p>We're glad you are here. Let's start building.</p>
          </div>
          <Video
            className={styles.introVideo}
            id="lzrwubc09a"
            type="wistia"
            title="Develop with New Relic"
          />
        </section>

        <section className={cx(styles.section, styles.stripedSection)}>
          <GuideListing className={styles.guideListing}>
            <header className={styles.guideListingHeader}>
              <GuideListing.Heading className={cx(styles.guideListingHeading)}>
                Get coding
              </GuideListing.Heading>
              <Button
                as={ExternalLink}
                variant={Button.VARIANT.PRIMARY}
                href="https://newrelic.com/signup?partner=Developer+Edition"
              >
                Create an account
              </Button>
            </header>
            <GuideListing.List>
              {getStartedGuides.map((guide, index) => (
                <GuideTile
                  key={index}
                  className={styles.featuredGuide}
                  {...guide}
                >
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
              We like to talk, especially to developers about developer things.
              Join us for conversations on open source, observability, software
              design and industry news.
            </p>
            <Button as={Link} variant={Button.VARIANT.PRIMARY} href="/podcasts">
              Listen
              <FeatherIcon className={styles.Icon} name="link" />
            </Button>
          </div>
          <img className={styles.img} src={podcastBadge} alt="podcast badge" />
        </section>
      </>
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
