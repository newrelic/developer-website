import GuideListing from '../components/GuideListing';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import React from 'react';
import SEO from '../components/Seo';

const heading = 'Explore Data in New Relic';

const description = `Once New Relic has your data, the next step is to query that data to get
what you need, when you need it. New Relic One provides modern APIs to
give you full control over how data is queried.`;

const guides = [
  {
    minutes: 15,
    title: 'GraphQL API',
    description:
      'Learn how to fetch precisely the data your application needs. No more, no less.',
    path: 'guides/graphql-api',
  },
  {
    minutes: 5,
    title: 'REST API',
    description:
      'Get data out to New Relic using the gold standard in API technology.',
    path: 'guides/rest-api',
  },
];

const ExploreDataPage = () => (
  <Layout>
    <SEO title={heading} />
    <GuideListing heading={heading} description={description} guides={guides} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default ExploreDataPage;
