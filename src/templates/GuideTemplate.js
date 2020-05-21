import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../components/Layout';
import BreadcrumbBar from '../components/BreadcrumbBar';
import Container from '../components/Container';
import CodeSnippet from '../components/CodeSnippet';

import createBreadcrumbs from '../utils/create-breadcrumbs';
import pages from '../data/sidenav.json';

const components = {
  code: (props) => <CodeSnippet {...props} />,
};

const GuideTemplate = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;

  const crumbs = createBreadcrumbs(frontmatter.path, pages);

  return (
    <Layout>
      <BreadcrumbBar crumbs={crumbs} duration={frontmatter.duration} />
      <Container>
        <div className="guideTemplate-container">
          <div>
            <h1>{frontmatter.title}</h1>
            <div className="guideTemplate-content">
              <MDXProvider components={components}>
                <MDXRenderer>{body}</MDXRenderer>
              </MDXProvider>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

GuideTemplate.propTypes = {
  data: PropTypes.object,
};

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

export default GuideTemplate;
