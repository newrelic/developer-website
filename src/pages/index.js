import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Jumbotron from '../components/Jumbotron';
import GuideGrid from '../components/GuideGrid';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron />
    <h2>Learn about observability with one of our guides</h2>
    <GuideGrid />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
