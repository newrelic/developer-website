import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import BreadcrumbBar from '../components/BreadcrumbBar';

export default function GuideTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <BreadcrumbBar />
      <div className="guideTemplate-container">
        <div>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.duration}</h2>
          <div
            className="guideTemplate-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        duration
        path
        title
      }
    }
  }
`;
GuideTemplate.propTypes = {
  data: PropTypes.object,
};
