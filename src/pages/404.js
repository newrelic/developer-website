import React from 'react';
import cx from 'classnames';
import { Link, useStaticQuery, graphql } from 'gatsby';
import SEO from '../components/Seo';
import SkewedContainer from '../components/SkewedContainer';
import { GlobalHeader } from '@newrelic/gatsby-theme-newrelic';
import Footer from '../components/Footer';
import { PageContext } from '../components/PageContext';
import { pageContext } from '../types';
import styles from './404.module.scss';

const NotFoundPage = ({ pageContext }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          repository
        }
      }
    }
  `);

  return (
    <PageContext.Provider value={pageContext}>
      <SEO title="404: Not found" />
      <div className={styles.layout}>
        <GlobalHeader
          editUrl={`${siteMetadata.repository}/blob/main/${pageContext.fileRelativePath}`}
          search
        />
        <div className={styles.contentContainer}>
          <SkewedContainer className={styles.content}>
            <h1 className={styles.header}>404</h1>
            <p>
              The URL you entered may be broken, or the page has been removed.{' '}
              <Link to="/">Go back to the home page</Link>.
            </p>
          </SkewedContainer>
        </div>
        <div className={styles.footerContainer}>
          <Footer className={cx(styles.footer, 'site-container')} />
        </div>
      </div>
    </PageContext.Provider>
  );
};

NotFoundPage.propTypes = {
  pageContext,
};

export default NotFoundPage;
