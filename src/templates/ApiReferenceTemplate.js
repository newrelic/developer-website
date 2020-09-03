import React from 'react';
import cx from 'classnames';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { CodeBlock } from '@newrelic/gatsby-theme-newrelic';
import PageLayout from '../components/PageLayout';
import Markdown from '../components/Markdown';
import MethodReference from '../components/MethodReference';
import TypeDefReference from '../components/TypeDefReference';
import ConstantReference from '../components/ConstantReference';
import SEO from '../components/Seo';

import templateStyles from './ReferenceTemplate.module.scss';
import useApiDoc from '../hooks/useApiDoc';

const ApiReferenceTemplate = ({ data }) => {
  const {
    newRelicSdkApi: { name: api },
  } = data;
  const {
    description: apiDescription,
    methods = [],
    usage = '',
    typeDefs = [],
    constants = [],
  } = useApiDoc(api) ?? {};

  return (
    <>
      <SEO title={api} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title={api} />
        <PageLayout.Content>
          {apiDescription && (
            <section
              className={cx(
                templateStyles.section,
                templateStyles.description,
                'intro-text'
              )}
            >
              <Markdown source={apiDescription} />
            </section>
          )}

          <section className={templateStyles.section}>
            <h2 className={templateStyles.sectionTitle}>Usage</h2>
            <CodeBlock language="js">{usage}</CodeBlock>
          </section>

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
    }
  }
`;

export default ApiReferenceTemplate;
