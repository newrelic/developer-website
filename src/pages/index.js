import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import GuideListing from '../components/GuideListing/GuideListing';
import GuideTile from '../components/GuideTile';
import PageTitle from '../components/PageTitle';
import Video from '../components/Video';
import ExternalLink from '../components/ExternalLink';
import styles from './index.module.scss';

const getStartedGuides = [
  {
    minutes: 5,
    title: 'Collect data from any source',
    description: `Learn how to ingest data from various sources. Whether you want to ingest data “out of the box,” or bring custom data into New Relic that isn't collected by default.`,
    path: '',
  },
  {
    minutes: 5,
    title: 'Instrument your data',
    description: `Use custom instrumentation to automatically produce complete information, without needing to modify your application code. Manage your environment through Observability as Code.`,
    path: '',
  },
  {
    minutes: 5,
    title: 'Customize your data',
    description: `Build and customize on the programmable platform by learning how to customize existing apps, enhance open source projects, or build your own application to solve your specific problem.`,
    path: '',
  },
];

const guides = [
  {
    minutes: 5,
    title: 'Full Stack Monitoring',
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

const IndexPage = () => (
  <Layout>
    <SEO />
    <PageTitle>Observability for every developer</PageTitle>

    <section className={styles.intro}>
      <div className={styles.introText}>
        <p>
          As developers, engineers, and problem solvers, pinpointing issues fast
          and improving performance effectively are your top priorities. Explore
          the developer site to learn how to collect data from any source,
          visualize and instrument your data, and customize it in any way you
          want. From how-to guides to video tutorials, community projects, and
          more - we’ve got you covered.
        </p>
        <p>
          Best of all? This site is built in open source. Submit ideas,
          feedback, and comments directly to our engineers.
        </p>
        <ExternalLink href="https://newrelic.com/signup?partner=Developer+Edition">
          <button type="button">Create a free account</button>
        </ExternalLink>
        <ExternalLink href="https://newrelic.com/request-demo">
          <button type="button" className="secondary">
            Request a demo
          </button>
        </ExternalLink>
      </div>
      <Video
        className={styles.introVideo}
        id="ZagZfNQYJEU"
        type="youtube"
        title="Develop with New Relic"
      />
    </section>

    <GuideListing className={styles.guideListing}>
      <GuideListing.Heading className={styles.guideListingHeading}>
        Get started
      </GuideListing.Heading>
      <GuideListing.List>
        {getStartedGuides.map((guide, index) => (
          <GuideTile className={styles.guideTile} key={index} {...guide} />
        ))}
      </GuideListing.List>
    </GuideListing>
    <hr className={styles.line} />

    <GuideListing className={styles.guideListing}>
      <GuideListing.Heading className={styles.guideListingHeading}>
        Build Solutions
      </GuideListing.Heading>
      <GuideListing.List>
        {guides.map((guide, index) => (
          <GuideTile className={styles.guideTile} key={index} {...guide} />
        ))}
      </GuideListing.List>
    </GuideListing>
  </Layout>
);

export default IndexPage;
