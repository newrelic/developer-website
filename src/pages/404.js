import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import SEO from '../components/Seo';
import SkewedContainer from '../components/SkewedContainer';
import GlobalHeader from '../components/GlobalHeader';
import Footer from '../components/Footer';
import { PageContext } from '../components/PageContext';
import { pageContext } from '../types';
import styles from './404.module.scss';

const NotFoundPage = ({ pageContext }) => (
  <PageContext.Provider value={pageContext}>
    <SEO title="404: Not found" />
    <div className={styles.layout}>
      <GlobalHeader />
      <div className={styles.contentContainer}>
        <SkewedContainer className={styles.content}>
          <h1 className={styles.header}>404</h1>
          <p>
            This page does not exist. Check the URL and try again, or{' '}
            <Link to="/">go back to the home page</Link>.
          </p>
        </SkewedContainer>
      </div>
      <div className={styles.footerContainer}>
        <Footer className={cx(styles.footer, 'site-container')} />
      </div>
    </div>
  </PageContext.Provider>
);

NotFoundPage.propTypes = {
  pageContext,
};

export default NotFoundPage;
