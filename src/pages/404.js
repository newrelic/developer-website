import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Section from '../components/Section';
import styles from './404.module.scss';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Section backgroundBanner className={styles.backgroundBanner}>
      <div className={styles.messageContainer}>
        <h1 className={styles.header}>404</h1>
        <p>
          This page does not exist. Check the URL and try again, or{' '}
          <Link to="/">go home</Link>.
        </p>
      </div>
    </Section>
  </Layout>
);

export default NotFoundPage;
