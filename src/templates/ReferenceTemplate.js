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
import useComponentDoc from '../hooks/useComponentDoc';

const previewStyles = {
  Spinner: {
    height: '16px',
  },
};

const ReferenceTemplate = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mdx } = data;
  const { frontmatter } = mdx;
  const { title, description, component } = frontmatter;
  const { examples, description: componentDescription } = useComponentDoc(
    component
  );

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

          <section className={cx(styles.section, styles.description)}>
            <ReactMarkdown source={componentDescription} />
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
                    previewStyle={previewStyles[component]}
                  />
                ))}
              </div>
            </section>
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
