import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import BreadcrumbBar from '../components/BreadcrumbBar';
import Container from '../components/Container';
import CodeSnippet from '../components/CodeSnippet';

export default function GuideTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data; // data.markdownRemark holds your post data
  const { frontmatter, body } = mdx;

  // TODO use graphql to fetch these
  const crumbs = [
    { displayName: 'Explore Data', url: '/explore-data' },
    { displayName: 'GraphQL API', url: '/guides/graphql-api' },
  ];

  return (
    <MDXProvider components={{ CodeSnippet }}>
      <Layout>
        <BreadcrumbBar crumbs={crumbs} duration={frontmatter.duration} />
        <Container>
          <div className="guideTemplate-container">
            <div>
              <h1>{frontmatter.title}</h1>
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          </div>
        </Container>
      </Layout>
    </MDXProvider>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
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
