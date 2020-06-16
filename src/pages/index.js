import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Jumbotron from '../components/Jumbotron';
import Section from '../components/Section';
import GuideListing from '../components/GuideListing/GuideListing';
import GuideTile from '../components/GuideTile';
import Video from '../components/Video';
import styles from './index.module.scss';

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
    <h1 className={styles.h1}>
      New Relic is a platform for your observability data
    </h1>

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
        <button type="button">Create a free account</button>
        <button type="button" className="secondary">
          Solve a business problem
        </button>
      </div>
      <Video id="ZagZfNQYJEU" type="youtube" title="Develop with new Relic" />
    </section>

    <Section backgroundBanner className={styles.backgroundBanner}>
      <Jumbotron />
    </Section>
    <div className={styles.line} />

    <GuideListing className={styles.guideListing}>
      <GuideListing.Heading className={styles.guideListingHeading}>
        Solve a problem with one of our guides
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
