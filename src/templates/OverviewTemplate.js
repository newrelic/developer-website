import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import MDXContainer from '../components/MDXContainer';
import GuideListing from '../components/GuideListing/GuideListing';
import GuideTile from '../components/GuideTile/GuideTile';

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
      {!!guides?.nodes.length && (
        <GuideListing>
          <GuideListing.List>
            {guides?.nodes.map(({ frontmatter }, index) => (
              <GuideTile
                as={Link}
                to={frontmatter.path}
                key={index}
                duration={frontmatter.duration}
                title={frontmatter.tileShorthand?.title || frontmatter.title}
                description={
                  frontmatter.tileShorthand?.description ||
                  frontmatter.description
                }
                path={frontmatter.path}
                alignment={GuideTile.ALIGNMENT.LEFT}
              />
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
          tileShorthand {
            title
            description
          }
        }
      }
    }
  }
`;

export default OverviewTemplate;
