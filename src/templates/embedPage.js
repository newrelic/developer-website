import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import PageLayout from '../components/PageLayout';

const EmbedPage = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;
  const { title } = frontmatter;

  return (
    <>
      <h1>{title}</h1>
      <PageLayout.MarkdownContent>{body}</PageLayout.MarkdownContent>
    </>
  );
};

export const pageQuery = graphql`
  query($contentSourcePath: String!) {
    mdx(frontmatter: { path: { eq: $contentSourcePath } }) {
      body
      frontmatter {
        title
      }
    }
  }
`;

EmbedPage.propTypes = {
  data: PropTypes.object,
};

export default EmbedPage;
