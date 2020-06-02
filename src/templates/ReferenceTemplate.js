import React, { useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import SEO from '../components/Seo';
import useSdk from '../hooks/useSdk';

import pages from '../data/sidenav.json';

import styles from './ReferenceTemplate.module.scss';

const ReferenceTemplate = ({ data }) => {
  const loaded = useSdk();
  const [isOpen, setIsOpen] = useState(false);
  const { mdx } = data;
  const { frontmatter } = mdx;
  const { title, description, component } = frontmatter;

  const componentData = window?.__NR1_SDK__?.default?.[component];

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
        {loaded ? (
          <main className={styles.content}>
            <h1>{component}</h1>

            {componentData && componentData.__docs__ && (
              <div className={styles.description}>
                <ReactMarkdown source={componentData.__docs__.text} />
              </div>
            )}
          </main>
        ) : (
          <p>Loading...</p>
        )}
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
