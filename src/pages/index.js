import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Jumbotron from '../components/Jumbotron';
import './index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron />
    <h2 className="indexPage-h2">
      {window.screenX >= 500
        ? 'Learn about observability with one of our guides'
        : 'Learn how with one of our guides'}
    </h2>
    <div className="indexPage-grid">
      <div className="indexPage-grid-guide">Collect Data</div>
      <div className="indexPage-grid-guide">Explore Data</div>
      <div className="indexPage-grid-guide">Build Apps</div>
      <div className="indexPage-grid-guide">Automate New Relic</div>
      <div className="indexPage-grid-guide">Reference Docs</div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
