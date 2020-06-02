import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
import Section from '../components/Section';
import GuideListing from '../components/GuideListing/GuideListing';
import GuideTile from '../components/GuideTile';
import './index.scss';

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
    <Container>
      <h1 className="indexPage-h1">
        New Relic is a platform for your observability data
      </h1>
      <div className="indexPage-intro">
        <div className="indexPage-intro-text">
          <p>
            <strong>Instrument</strong> your applications and{' '}
            <strong>collect</strong> data about their performance.
          </p>

          <p>
            <strong>Query</strong> and <strong>explore</strong> the data on
            demand with APIs.
          </p>

          <p>
            <strong>Create</strong>, <strong>remix</strong>, and{' '}
            <strong>deploy</strong> new apps on top of this data.
          </p>

          <p>
            <strong>Share</strong> those apps with your company and the world.
          </p>

          <p>
            <strong>Automate</strong> the entire process with robust DevOps
            tools.
          </p>
          <div className="indexPage-intro-buttonContainer">
            <button type="button">Create a free account</button>
            <button type="button" className="secondary">
              Solve a business problem
            </button>
          </div>
        </div>
        <div className="indexPage-intro-video" />
      </div>
    </Container>
    <Section backgroundBanner className="indexPage-section-backgroundBanner">
      <Jumbotron />
    </Section>
    <div className="indexPage-line" />

    <GuideListing className="indexPage-guideListing">
      <GuideListing.Heading className="indexPage-guideListing-heading">
        Solve a problem with one of our guides
      </GuideListing.Heading>
      <GuideListing.List>
        {guides.map((guide, index) => (
          <GuideTile className="indexPage-guideTile" key={index} {...guide} />
        ))}
      </GuideListing.List>
    </GuideListing>
  </Layout>
);

export default IndexPage;
