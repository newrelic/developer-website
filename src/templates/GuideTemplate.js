import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import Layout from '../components/Layout';
import FeatherIcon from '../components/FeatherIcon';
import PageTitle from '../components/PageTitle';
import Video from '../components/Video';
import Step from '../components/Step';
import Steps from '../components/Steps';
import Caution from '../components/Caution';
import Important from '../components/Important';
import Tip from '../components/Tip';
import Intro from '../components/Intro';
import SEO from '../components/Seo';
import { BreadcrumbContext } from '../components/BreadcrumbContext';
import createBreadcrumbs from '../utils/create-breadcrumbs';
import pages from '../data/sidenav.json';
import styles from './GuideTemplate.module.scss';
import CodeSnippet from '../components/CodeSnippet';

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

const GuideTemplate = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;
  const { title, description, duration } = frontmatter;
  const crumbs = createBreadcrumbs(frontmatter.path, pages);

  return (
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
        <div className={styles.mdxContainer}>
          <MDXProvider components={components}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </div>
      </Layout>
    </BreadcrumbContext.Provider>
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
        description
      }
    }
  }
`;

export default GuideTemplate;
