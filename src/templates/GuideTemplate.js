import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MDXContainer from '../components/MDXContainer';

import { pageContext } from '../types';
import Layout from '../components/Layout';
import FeatherIcon from '../components/FeatherIcon';
import PageTitle from '../components/PageTitle';
import SEO from '../components/Seo';
import { BreadcrumbContext } from '../components/BreadcrumbContext';
import { PageContext } from '../components/PageContext';
import createBreadcrumbs from '../utils/create-breadcrumbs';
import pages from '../data/sidenav.json';
import styles from './GuideTemplate.module.scss';

const GuideTemplate = ({ data, pageContext }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;
  const { title, description, duration } = frontmatter;
  const crumbs = createBreadcrumbs(frontmatter.path, pages);

  return (
    <PageContext.Provider value={pageContext}>
      <BreadcrumbContext.Provider value={crumbs}>
        <Layout>
          <SEO title={title} description={description} />
          <div className={styles.header}>
            <PageTitle>{title}</PageTitle>
            {duration && (
              <div className={styles.duration}>
                <FeatherIcon name="clock" className={styles.clock} />
                {duration}
              </div>
            )}
          </div>
          <MDXContainer>{body}</MDXContainer>
        </Layout>
      </BreadcrumbContext.Provider>
    </PageContext.Provider>
  );
};

GuideTemplate.propTypes = {
  data: PropTypes.object,
  pageContext,
};

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        duration
        path
        title
        description
      }
    }
  }
`;

export default GuideTemplate;
