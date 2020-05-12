import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from '../components/Container';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import navFromEdges from '../utils/nav-from-edges';

// TODO: move this js file to same directory and update import
import '../templates/Reference.scss';

const Reference = () => {
  const [isOpen, setIsOpen] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `);
  const pages = navFromEdges(data.allMarkdownRemark.edges);

  return (
    <Layout>
      <Container className="ReferenceTemplate">
        <Sidebar
          pages={pages}
          isOpen={isOpen}
          toggle={() => setIsOpen(!isOpen)}
        />
        <main className="ReferenceTemplate-content">
          The main page content goes here
        </main>
      </Container>
    </Layout>
  );
};

export default Reference;
