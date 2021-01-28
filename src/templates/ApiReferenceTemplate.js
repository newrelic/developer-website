import React from 'react';
import cx from 'classnames';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { CodeBlock } from '@newrelic/gatsby-theme-newrelic';
import PageLayout from '../components/PageLayout';
import Markdown from '../components/Markdown';
import ReferenceExample from '../components/ReferenceExample';
import MethodReference from '../components/MethodReference';
import TypeDefReference from '../components/TypeDefReference';
import ConstantReference from '../components/ConstantReference';
import SEO from '../components/Seo';

import templateStyles from './ReferenceTemplate.module.scss';

const ApiReferenceTemplate = ({ data }) => {
  const {
    newRelicSdkApi: {
      name,
      usage,
      description,
      examples,
      methods,
      typeDefs,
      constants,
    },
  } = data;

  return (
    <>
      <SEO title={name} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title={name} />
        <PageLayout.Content>
          {description && (
            <section
              className={cx(
                templateStyles.section,
                templateStyles.description,
                'intro-text'
              )}
            >
              <Markdown source={description} />
            </section>
          )}

          <section className={templateStyles.section}>
            <h2 className={templateStyles.sectionTitle}>Usage</h2>
            <CodeBlock language="js">{usage}</CodeBlock>
          </section>

          {examples.length > 0 && (
            <section className={templateStyles.section}>
              <div>
                <h2 className={templateStyles.sectionTitle}>Examples</h2>
                {examples.map((example, i) => (
                  <ReferenceExample
                    key={i}
                    useToastManager={name === 'Toast'}
                    example={example}
                  />
                ))}
              </div>
            </section>
          )}

          {methods.length > 0 && (
            <section className={templateStyles.section}>
              <h2 className={templateStyles.sectionTitle}>API methods</h2>
              {methods.map((method, i) => (
                <MethodReference
                  key={i}
                  method={method}
                  className={templateStyles.section}
                />
              ))}
            </section>
          )}

          {typeDefs.length > 0 && (
            <section className={templateStyles.section}>
              <h2 className={templateStyles.sectionTitle}>Type definitions</h2>
              {typeDefs.map((typeDef, i) => (
                <TypeDefReference key={i} typeDef={typeDef} />
              ))}
            </section>
          )}

          {constants.length > 0 && (
            <section className={templateStyles.section}>
              <h2 className={templateStyles.sectionTitle}>Constants</h2>
              {constants.map((constant, i) => (
                <ConstantReference key={i} constant={constant} />
              ))}
            </section>
          )}
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

ApiReferenceTemplate.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query($path: String!) {
    newRelicSdkApi(fields: { slug: { eq: $path } }) {
      name
      description
      usage
      examples {
        ...ReferenceExample_example
      }
      methods {
        ...MethodReference_method
      }
      typeDefs {
        ...TypeDefReference_typeDef
      }
      constants {
        ...ConstantReference_constant
      }
    }
  }
`;

export default ApiReferenceTemplate;
