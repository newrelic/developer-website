import React, { useState } from 'react';
import cx from 'classnames';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import InlineCodeSnippet from '../components/InlineCodeSnippet';
import ReactMarkdown from 'react-markdown';
import Container from '../components/Container';
import ReferenceExample from '../components/ReferenceExample';
import Layout from '../components/Layout';
import MethodReference from '../components/MethodReference';
import Sidebar from '../components/Sidebar';
import SEO from '../components/Seo';
import PropList from '../components/PropList';
import pages from '../data/sidenav.json';
import styles from './ComponentReferenceTemplate.module.scss';
import templateStyles from './ReferenceTemplate.module.scss';
import useComponentDoc from '../hooks/useComponentDoc';
import IconGallery from '../components/IconGallery';
import TypeDefReference from '../components/TypeDefReference';

const previewStyles = {
  Spinner: {
    height: '16px',
  },
};

const ComponentReferenceTemplate = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mdx } = data;
  const { frontmatter } = mdx;
  const { title, description, component } = frontmatter;
  const {
    examples = [],
    description: componentDescription,
    methods = [],
    usage = '',
    typeDefs = [],
    propTypes = [],
  } = useComponentDoc(component) ?? {};

  return (
    <Layout>
      <SEO title={title} description={description} />
      <Container className={templateStyles.container}>
        <Sidebar
          className={templateStyles.sidebar}
          pages={pages}
          isOpen={isOpen}
          toggle={() => setIsOpen(!isOpen)}
        />
        <main className={templateStyles.content}>
          <h1>{component}</h1>

          <section
            className={cx(
              templateStyles.section,
              templateStyles.description,
              'intro-text'
            )}
          >
            <ReactMarkdown source={componentDescription} />
          </section>

          <section className={templateStyles.section}>
            <h2>Usage</h2>
            <InlineCodeSnippet language="js">{usage}</InlineCodeSnippet>
          </section>

          {examples.length > 0 && (
            <section className={templateStyles.section}>
              <h2>Examples</h2>
              <div>
                {examples.map((example, i) => (
                  <ReferenceExample
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

          {component === 'Icon' && (
            <section className={templateStyles.section}>
              <IconGallery />
            </section>
          )}

          <section className={templateStyles.section}>
            <h2>Props</h2>
            <PropList propTypes={propTypes} />
          </section>

          {methods.length > 0 && (
            <section className={templateStyles.section}>
              <h2>Methods</h2>
              {methods.map((method, i) => (
                <MethodReference key={i} method={method} />
              ))}
            </section>
          )}

          {typeDefs.length > 0 && (
            <section className={templateStyles.section}>
              <h2>Type definitions</h2>
              {typeDefs.map((typeDef, i) => (
                <TypeDefReference key={i} typeDef={typeDef} />
              ))}
            </section>
          )}
        </main>
      </Container>
    </Layout>
  );
};

ComponentReferenceTemplate.propTypes = {
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

export default ComponentReferenceTemplate;
