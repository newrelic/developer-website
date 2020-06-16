import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import Layout from '../components/Layout';
import BreadcrumbBar from '../components/BreadcrumbBar';
import Video from '../components/Video';
import Step from '../components/Step';
import Steps from '../components/Steps';
import Caution from '../components/Caution';
import Important from '../components/Important';
import Tip from '../components/Tip';
import Intro from '../components/Intro';
import SEO from '../components/Seo';
import styles from './GuideTemplate.module.scss';

import createBreadcrumbs from '../utils/create-breadcrumbs';
import pages from '../data/sidenav.json';
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
  const { title, description } = frontmatter;

  const crumbs = createBreadcrumbs(frontmatter.path, pages);

  return (
    <Layout>
      <SEO title={title} description={description} />
      <BreadcrumbBar crumbs={crumbs} duration={frontmatter.duration} />
      <h1>{title}</h1>
      <div className={styles.mdxContainer}>
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </div>
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
        description
      }
    }
  }
`;

export default GuideTemplate;
