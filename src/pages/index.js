import React from 'react';
import cx from 'classnames';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import GuideListing from '../components/GuideListing/GuideListing';
import GuideTile from '../components/GuideTile';
import PageTitle from '../components/PageTitle';
import Section from '../components/Section';
import Video from '../components/Video';
import ExternalLink from '../components/ExternalLink';
import { PageContext } from '../components/PageContext';
import { pageContext } from '../types';
import styles from './index.module.scss';

const getStartedGuides = [
  {
    minutes: 5,
    title: 'Collect data',
    description: `Define, visualize, and get alerts on the data you want using custom events`,
    path: '/collect-data/custom-events',
    icon: 'bar-chart',
  },
  {
    minutes: 7,
    title: 'Automate data',
    description: `Add tags to applications you instrument for easier filtering and organization`,
    path: '/automate-workflows/add-tags-to-apps',
    icon: 'box',
  },
  {
    minutes: 12,
    title: 'Build custom apps',
    description: `Build a Hello World! app and publish it to your local New Relic One Catalog`,
    path: '/build-apps/build-hello-world-app',
    icon: 'cpu',
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
    title: ' Set up your dev environment',
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

      <section className={styles.intro}>
        <div className={styles.introText}>
          <p>
            As developers, engineers, and problem solvers, pinpointing issues
            fast and improving performance effectively are your top priorities.
            Explore the developer site to learn how to collect data from any
            source, visualize and instrument your data, and customize it in any
            way you want. From how-to guides to video tutorials, community
            projects, and more - we’ve got you covered.
          </p>
          <p>
            Best of all? This site is built in open source. Submit ideas,
            feedback, and comments directly to our engineers.
          </p>
        </div>
        <Video
          className={styles.introVideo}
          id="ZagZfNQYJEU"
          type="youtube"
          title="Develop with New Relic"
        />
      </section>

      <Section backgroundBanner>
        <GuideListing className={styles.guideListing}>
          <header className={styles.guideListingHeader}>
            <GuideListing.Heading className={cx(styles.guideListingHeading)}>
              Get started in minutes
            </GuideListing.Heading>
            <ExternalLink href="https://newrelic.com/signup?partner=Developer+Edition">
              <button type="button">Create a free account</button>
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
          Build Solutions
        </GuideListing.Heading>
        <GuideListing.List>
          {guides.map((guide, index) => (
            <GuideTile key={index} {...guide} />
          ))}
        </GuideListing.List>
      </GuideListing>
    </Layout>
  </PageContext.Provider>
);

IndexPage.propTypes = {
  pageContext,
};

export default IndexPage;
