import React, { useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Container from '../components/Container';
import ComponentExample from '../components/ComponentExample';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import SEO from '../components/Seo';
import useSdk from '../hooks/useSdk';

import pages from '../data/sidenav.json';

import styles from './ReferenceTemplate.module.scss';

const ReferenceTemplate = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mdx } = data;
  const { frontmatter } = mdx;
  const { title, description } = frontmatter;
  useSdk();

  const component = window.__NR1_SDK__?.default[frontmatter.component];
  const examples = component?.__docs__.tags.examples || [];

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
          <h1>{frontmatter.component}</h1>
          <section>
            <h2>Examples</h2>
            <section>
              {examples.map((example, i) => (
                <ComponentExample
                  key={i}
                  className={styles.componentExample}
                  example={example}
                />
              ))}
            </section>
          </section>
        </main>
      </Container>
    </Layout>
  );
};

ReferenceTemplate.propTypes = {
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
        component
      }
    }
  }
`;

export default ReferenceTemplate;
