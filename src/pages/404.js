import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/Seo';
import SkewedContainer from '../components/SkewedContainer';
import { GlobalHeader, GlobalFooter } from '@newrelic/gatsby-theme-newrelic';
import { PageContext } from '../components/PageContext';
import { pageContext } from '../types';
import styles from './404.module.scss';

const NotFoundPage = ({ pageContext }) => {
  return (
    <PageContext.Provider value={pageContext}>
      <SEO title="404: Not found" />
      <div className={styles.layout}>
        <GlobalHeader />
        <div className={styles.contentContainer}>
          <SkewedContainer className={styles.content}>
            <h1 className={styles.header}>404</h1>
            <p>
              The URL you entered may be broken, or the page has been removed.{' '}
              <Link to="/">Go back to the home page</Link>.
            </p>
          </SkewedContainer>
        </div>
        <GlobalFooter fileRelativePath={pageContext.fileRelativePath} />
      </div>
    </PageContext.Provider>
  );
};

NotFoundPage.propTypes = {
  pageContext,
};

export default NotFoundPage;
