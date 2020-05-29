import React, { useState } from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import SEO from '../components/Seo';

import pages from '../data/sidenav.json';

// TODO: move this js file to same directory and update import
import '../templates/Reference.scss';

const Reference = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <SEO title="Reference" />
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
