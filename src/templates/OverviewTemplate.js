import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import MDXContainer from '../components/MDXContainer';
import GuideListing from '../components/GuideListing/GuideListing';
import GuideTile from '../components/GuideTile';

import SEO from '../components/Seo';

const OverviewTemplate = ({ data }) => {
  const { mdx, guides } = data;
  const { frontmatter, body } = mdx;
  const { title, description } = frontmatter;

  return (
    <Layout>
      <SEO title={title} description={description} />
      <PageTitle>{title}</PageTitle>
      <MDXContainer>{body}</MDXContainer>
      {guides?.nodes.length && (
        <GuideListing>
          <GuideListing.Heading>
            Guides to build New Relic apps ({guides?.nodes.length})
          </GuideListing.Heading>
          <GuideListing.List>
            {guides?.nodes.map((guide, index) => (
              <GuideTile key={index} {...guide?.frontmatter} />
            ))}
          </GuideListing.List>
        </GuideListing>
      )}
    </Layout>
  );
};

OverviewTemplate.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query($path: String!, $guidesFilter: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        path
        title
        description
      }
    }
    guides: allMdx(
      filter: {
        frontmatter: {
          template: { eq: "GuideTemplate" }
          path: { glob: $guidesFilter }
        }
      }
    ) {
      nodes {
        frontmatter {
          path
          title
          description
          duration
        }
      }
    }
  }
`;

export default OverviewTemplate;
