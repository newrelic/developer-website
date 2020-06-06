import React, { useState } from 'react';
import cx from 'classnames';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import InlineCodeSnippet from '../components/InlineCodeSnippet';
import ReactMarkdown from 'react-markdown';
import Container from '../components/Container';
import Layout from '../components/Layout';
import MethodReference from '../components/MethodReference';
import Sidebar from '../components/Sidebar';
import SEO from '../components/Seo';
import pages from '../data/sidenav.json';
import styles from './ApiDocTemplate.module.scss';
import useApiDoc from '../hooks/useApiDoc';

const ApiDocTemplate = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mdx } = data;
  const { frontmatter } = mdx;
  const { title, description, api } = frontmatter;
  const { description: apiDescription, methods = [], usage = '' } =
    useApiDoc(api) ?? {};

  return (
    <Layout>
      <SEO title={title} description={description} />
      <Container className={styles.container}>
        <Sidebar
          className={styles.sidebar}
          pages={pages}
          isOpen={isOpen}
          toggle={() => setIsOpen(!isOpen)}
        />
        <main className={styles.content}>
          <h1>{api}</h1>

          <section className={cx(styles.section, styles.description)}>
            <ReactMarkdown source={apiDescription} />
          </section>

          <section className={styles.section}>
            <h2>Usage</h2>
            <InlineCodeSnippet language="js">{usage}</InlineCodeSnippet>
          </section>

          {methods.length > 0 && (
            <section className={styles.section}>
              <h2>API methods</h2>
              {methods.map((method, i) => (
                <MethodReference key={i} method={method} />
              ))}
            </section>
          )}
        </main>
      </Container>
    </Layout>
  );
};

ApiDocTemplate.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        path
        title
        description
        api
      }
    }
  }
`;

export default ApiDocTemplate;
