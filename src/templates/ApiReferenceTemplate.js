import React from 'react';
import cx from 'classnames';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import InlineCodeSnippet from '../components/InlineCodeSnippet';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';
import MethodReference from '../components/MethodReference';
import TypeDefReference from '../components/TypeDefReference';
import ConstantReference from '../components/ConstantReference';
import SEO from '../components/Seo';

import templateStyles from './ReferenceTemplate.module.scss';
import useApiDoc from '../hooks/useApiDoc';

const ApiReferenceTemplate = ({ data }) => {
  const { mdx } = data;
  const { frontmatter } = mdx;
  const { title, description, api } = frontmatter;
  const {
    description: apiDescription,
    methods = [],
    usage = '',
    typeDefs = [],
    constants = [],
  } = useApiDoc(api) ?? {};

  return (
    <Layout>
      <SEO title={title} description={description} />
      <h1>{api}</h1>

      <section
        className={cx(templateStyles.section, templateStyles.description)}
      >
        <ReactMarkdown source={apiDescription} />
      </section>

      <section className={templateStyles.section}>
        <h2>Usage</h2>
        <InlineCodeSnippet language="js">{usage}</InlineCodeSnippet>
      </section>

      {methods.length > 0 && (
        <section className={templateStyles.section}>
          <h2>API methods</h2>
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

      {constants.length > 0 && (
        <section className={templateStyles.section}>
          <h2>Constants</h2>
          {constants.map((constant, i) => (
            <ConstantReference key={i} constant={constant} />
          ))}
        </section>
      )}
    </Layout>
  );
};

ApiReferenceTemplate.propTypes = {
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

export default ApiReferenceTemplate;
