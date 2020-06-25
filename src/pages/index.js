import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import GuideListing from '../components/GuideListing/GuideListing';
import GuideTile from '../components/GuideTile';
import PageTitle from '../components/PageTitle';
import Video from '../components/Video';
import FeatherIcon from '../components/FeatherIcon';
import ExternalLink from '../components/ExternalLink';
import { PageContext } from '../components/PageContext';
import { pageContext } from '../types';
import styles from './index.module.scss';

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
    path: '/automate-workflows/add-tags-to-apps',
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
  const promotedGuides = nodes.filter((node, i) => i < 6);
  const [guides, setGuides] = useState(promotedGuides);
  const guidesMinusPromoted = nodes.length - 6;

  return (
    <PageContext.Provider value={pageContext}>
      <Layout>
        <SEO />
        <PageTitle>Observability for every developer</PageTitle>

        <section className={styles.intro}>
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
            id="ZagZfNQYJEU"
            type="youtube"
            title="Develop with New Relic"
          />
        </section>

        <section className={cx(styles.section, styles.stripedSection)}>
          <GuideListing className={styles.guideListing}>
            <header className={styles.guideListingHeader}>
              <GuideListing.Heading className={cx(styles.guideListingHeading)}>
                Get coding
              </GuideListing.Heading>
              <ExternalLink href="https://newrelic.com/signup?partner=Developer+Edition">
                <button type="button">Create an account</button>
              </ExternalLink>
            </header>
            <GuideListing.List>
              {getStartedGuides.map((guide, index) => (
                <GuideTile key={index} {...guide} />
              ))}
            </GuideListing.List>
          </GuideListing>
        </section>

        <GuideListing className={styles.section}>
          <GuideListing.Heading className={styles.guideListingHeading}>
            Get inspired
          </GuideListing.Heading>
          <GuideListing.List>
            {guides.map(({ frontmatter }, index) => (
              <GuideTile
                key={index}
                duration={frontmatter.duration}
                title={frontmatter.callout?.title || frontmatter.title}
                description={
                  frontmatter.callout?.description || frontmatter.description
                }
                path={frontmatter.path}
                button={false}
              />
            ))}
          </GuideListing.List>
        </GuideListing>
        {guides.length === 6 && (
          <div className={styles.buttonContainer}>
            <button
              className={styles.expandGuides}
              type="button"
              onClick={() => setGuides(nodes)}
            >
              {`Show ${guidesMinusPromoted} more guides`}
            </button>
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

        <section className={cx(styles.section, styles.stripedSection)}>
          <h1>New Relic developer champions</h1>
          <p>
            New Relic Champions are solving big problems using New Relic as
            their linchpin and are recognized as experts and leaders in the New
            Relic technical community.
          </p>
          <ExternalLink href="https://forms.gle/Zkdub5e1x4MNqSKW9">
            <button type="button">
              Nominate a Developer Champion
              <FeatherIcon
                className={styles.externalLinkIcon}
                name="external-link"
              />
            </button>
          </ExternalLink>
        </section>
      </Layout>
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
          ignoreGuide: { ne: true }
        }
      }
      sort: { fields: [frontmatter___promoteToHomepage, frontmatter___title] }
    ) {
      nodes {
        frontmatter {
          title
          description
          duration
          path
          ignoreGuide
          callout {
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
