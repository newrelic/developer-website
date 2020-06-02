import React, { useState } from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import SEO from '../components/Seo';

import pages from '../data/sidenav.json';
import styles from './reference.module.scss';

const Reference = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <SEO title="Reference" />
      <Container className={styles.container}>
        <Sidebar
          className={styles.sidebar}
          pages={pages}
          isOpen={isOpen}
          toggle={() => setIsOpen(!isOpen)}
        />
        <main className={styles.content}>The main page content goes here</main>
      </Container>
    </Layout>
  );
};

export default Reference;
