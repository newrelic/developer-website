import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MDXContainer from '../components/MDXContainer';

import Layout from '../components/Layout';
import FeatherIcon from '../components/FeatherIcon';
import PageTitle from '../components/PageTitle';
import SEO from '../components/Seo';
import styles from './GuideTemplate.module.scss';

const GuideTemplate = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body, fields } = mdx;
  const { title, description, duration } = frontmatter;

  return (
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
      <div className={styles.lastUpdated}>
        {`Page last modified on ${fields.gitAuthorTime}`}
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
      fields {
        gitAuthorTime(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default GuideTemplate;
