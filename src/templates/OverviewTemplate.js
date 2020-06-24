import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { pageContext } from '../types';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import MDXContainer from '../components/MDXContainer';
import GuideListing from '../components/GuideListing/GuideListing';
import GuideTile from '../components/GuideTile';

import SEO from '../components/Seo';
import { BreadcrumbContext } from '../components/BreadcrumbContext';
import { PageContext } from '../components/PageContext';
import createBreadcrumbs from '../utils/create-breadcrumbs';
import pages from '../data/sidenav.json';

const OverviewTemplate = ({ data, pageContext }) => {
  const { mdx, guides } = data;
  const { frontmatter, body } = mdx;
  const { title, description } = frontmatter;
  const crumbs = createBreadcrumbs(frontmatter.path, pages);

  return (
    <PageContext.Provider value={pageContext}>
      <BreadcrumbContext.Provider value={crumbs}>
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
      </BreadcrumbContext.Provider>
    </PageContext.Provider>
  );
};

OverviewTemplate.propTypes = {
  data: PropTypes.object,
  pageContext,
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
