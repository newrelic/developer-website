import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { pageContext } from '../types';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import GuideListing from '../components/GuideListing/GuideListing';
import GuideTile from '../components/GuideTile';

import Video from '../components/Video';
import Step from '../components/Step';
import Steps from '../components/Steps';
import Caution from '../components/Caution';
import Important from '../components/Important';
import Tip from '../components/Tip';
import Intro from '../components/Intro';
import SEO from '../components/Seo';
import { BreadcrumbContext } from '../components/BreadcrumbContext';
import { PageContext } from '../components/PageContext';
import createBreadcrumbs from '../utils/create-breadcrumbs';
import pages from '../data/sidenav.json';
import styles from './OverviewTemplate.module.scss';
import CodeSnippet from '../components/CodeSnippet';

/**
 * TODO
 * Share markdown components collection
 * Move contexts to wrapRootElement (and remove pageContext)
 * Remove extra div from around PageTitle
 */

const components = {
  Video,
  Step,
  Steps,
  Caution,
  Important,
  Tip,
  Intro,
  code: (props) => <CodeSnippet {...props} />,
};

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
          <div className={styles.header}>
            <PageTitle>{title}</PageTitle>
          </div>
          <div className={styles.mdxContainer}>
            <MDXProvider components={components}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </div>
          {guides?.nodes.length && (
            <GuideListing className={styles.guideListing}>
              <GuideListing.Heading className={styles.guideListingHeading}>
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
