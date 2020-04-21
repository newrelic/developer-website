import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Jumbotron from '../components/Jumbotron';
import GuideGrid from '../components/GuideGrid';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron />
    <h3>Learn about observability with one of our guides</h3>
    <GuideGrid />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
