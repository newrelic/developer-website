import React, { useState } from 'react';
import cx from 'classnames';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Container from '../components/Container';
import ComponentExample from '../components/ComponentExample';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import SEO from '../components/Seo';

import pages from '../data/sidenav.json';

import styles from './ReferenceTemplate.module.scss';

const ReferenceTemplate = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mdx } = data;
  const { frontmatter } = mdx;
  const { title, description, component } = frontmatter;

  if (typeof window === 'undefined') global.window = {};
  const componentData = window?.__NR1_SDK__?.default?.[component];
  const examples = componentData?.__docs__.tags.examples || [];

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
          <h1>{component}</h1>

          {componentData && componentData.__docs__ && (
            <>
              <section className={cx(styles.section, styles.description)}>
                <ReactMarkdown source={componentData.__docs__.text} />
              </section>
              {examples.length > 0 && (
                <section className={styles.section}>
                  <h2>Examples</h2>
                  <div>
                    {examples.map((example, i) => (
                      <ComponentExample
                        key={i}
                        useToastManager={component === 'Toast'}
                        className={styles.componentExample}
                        example={example}
                      />
                    ))}
                  </div>
                </section>
              )}
            </>
          )}
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
