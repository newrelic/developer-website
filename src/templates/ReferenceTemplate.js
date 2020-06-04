import React, { Fragment, useState } from 'react';
import cx from 'classnames';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import InlineCodeSnippet from '../components/InlineCodeSnippet';
import ReactMarkdown from 'react-markdown';
import Container from '../components/Container';
import ComponentExample from '../components/ComponentExample';
import FunctionDefinition from '../components/FunctionDefinition';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import SEO from '../components/Seo';
import PropList from '../components/PropList';
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
  const componentDoc = useComponentDoc(component);

  const {
    examples = [],
    description: componentDescription,
    methods = [],
    usage = '',
    propTypes,
    defaultProps,
  } = componentDoc ?? {};

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
        <main className={styles.content}>
          <h1>{component}</h1>

          <section className={cx(styles.section, styles.description)}>
            <ReactMarkdown source={componentDescription} />
          </section>

          <section className={styles.section}>
            <h2>Usage</h2>
            <InlineCodeSnippet language="js">{usage}</InlineCodeSnippet>
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

          <section className={styles.section}>
            <h2>Props</h2>
            <PropList
              component={componentData}
              propTypes={propTypes}
              defaultProps={defaultProps}
            />
          </section>

          {methods.length > 0 && (
            <section className={styles.section}>
              <h2>Methods</h2>
              {methods.map((method, i) => (
                <Fragment key={i}>
                  <h3 className={styles.methodName}>{method.name}</h3>
                  <ReactMarkdown
                    className={styles.methodDescription}
                    source={method.description}
                  />
                  <FunctionDefinition
                    params={method.params}
                    returnValue={method.returnValue}
                  />
                </Fragment>
              ))}
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
