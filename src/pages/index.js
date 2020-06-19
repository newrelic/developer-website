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
    icon: 'cpu',
  },
  {
    minutes: 12,
    title: 'Build custom apps',
    description: `Build a Hello World! app and publish it to your local New Relic One Catalog`,
    path: '/build-apps/build-hello-world-app',
    icon: 'box',
  },
];

const guides = [
  {
    minutes: 5,
    title: 'Create a Flex Integration',
    description: 'Get data into New Relic using your existing instrumentation.',
    path: '',
  },
  {
    minutes: 10,
    title: 'Customized Agents',
    description:
      'Extend the New Relic agents you already have with custom events and attributes.',
    path: '',
  },
  {
    minutes: 30,
    title: 'Open Telemetry',
    description:
      'Learn to use the open standard for data collection with New Relic.',
    path: 'guides/rest-api',
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

      <Section backgroundBanner>
        <GuideListing className={styles.guideListing}>
          <header className={styles.guideListingHeader}>
            <GuideListing.Heading className={cx(styles.guideListingHeading)}>
              Get started
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
          Build solutions
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
