import React from 'react';
import cx from 'classnames';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import GuideListing from '../components/GuideListing/GuideListing';
import GuideTile from '../components/GuideTile';
import PageTitle from '../components/PageTitle';
import Section from '../components/Section';
import Video from '../components/Video';
import FeatherIcon from '../components/FeatherIcon';
import ExternalLink from '../components/ExternalLink';
import { PageContext } from '../components/PageContext';
import { pageContext } from '../types';
import styles from './index.module.scss';

const getStartedGuides = [
  {
    minutes: 5,
    title: 'Create custom events',
    description:
      'Define, visualize, and get alerts on the data you want using custom events',
    path: '/collect-data/custom-events',
    icon: 'collectData',
  },
  {
    minutes: 7,
    title: 'Add tags to apps',
    description: `Add tags to applications you instrument for easier filtering and organization`,
    path: '/automate-workflows/add-tags-to-apps',
    icon: 'automation',
  },
  {
    minutes: 12,
    title: 'Build a Hello, World! app',
    description: `Build a Hello, World! app and publish it to your local New Relic One Catalog`,
    path: '/build-apps/build-hello-world-app',
    icon: 'buildApps',
  },
];

const guides = [
  {
    minutes: 20,
    title: 'Automate common tasks',
    description:
      'Use the New Relic CLI to tag applications and create deployment markers',
    path: '/guides/get-started-new-relic-cli',
  },
  {
    minutes: '15-30',
    title: 'Map page views by region',
    description: 'Build a New Relic app showing page view data on a world map',
    path: '/build-apps/map-pageviews-by-region',
  },
  {
    minutes: 25,
    title: 'Provision with Terraform',
    description: 'Provision an alert policy with notifications using Terraform',
    path: '/',
  },
  {
    minutes: 15,
    title: ' Set up dev tools',
    description: 'Get an API key, download the CLI, and start building apps',
    path: '/build-apps/set-up-dev-env',
  },
  {
    minutes: 30,
    title: 'Add a table to your app',
    description: 'Use New Relic One components to add a table to your app',
    path: '/build-apps/howto-use-nrone-table-components',
  },
  {
    minutes: 20,
    title: 'Add a time picker',
    description:
      'Add the time picker to a sample app to specify a time range in data',
    path: '/build-apps/add-time-picker-guide',
  },
];

const IndexPage = ({ pageContext }) => (
  <PageContext.Provider value={pageContext}>
    <Layout>
      <SEO />
      <PageTitle>Observability for every developer</PageTitle>

      <section className={cx(styles.section, styles.intro)}>
        <div className={cx(styles.introText, 'intro-text')}>
          <p>
            Welcome to the New Relic developer site! Here, you’ll find the tools
            and resources you need to build on and customize the platform.
          </p>
          <p>
            You need custom data that improves performance. We have tools for
            that! Learn how to collect data from any source and visualize it the
            way you need. Build out solutions in your own custom apps, and then
            automate them. From how-to guides to video tutorials, community
            projects, and more - we’ve got you covered.
          </p>
          <p>
            Best of all? This open source site is built for you — your
            suggestions, feedback, and comments are just a Pull Request away.
          </p>
        </div>
        <Video
          className={styles.introVideo}
          id="ZagZfNQYJEU"
          type="youtube"
          title="Develop with New Relic"
        />
      </section>

      <Section className={styles.section} backgroundBanner>
        <GuideListing>
          <header className={styles.guideListingHeader}>
            <GuideListing.Heading className={cx(styles.guideListingHeading)}>
              Get started
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
      </Section>

      <GuideListing className={styles.guideListing}>
        <GuideListing.Heading className={styles.guideListingHeading}>
          Extend the platform
        </GuideListing.Heading>
        <GuideListing.List>
          {guides.map((guide, index) => (
            <GuideTile key={index} {...guide} />
          ))}
        </GuideListing.List>
      </GuideListing>

      <p className={styles.inspiration}>
        Looking for inspiration? Check out the{' '}
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
    </Layout>
  </PageContext.Provider>
);

IndexPage.propTypes = {
  pageContext,
};

export default IndexPage;
