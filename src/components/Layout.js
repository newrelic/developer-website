import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Footer from './Footer';
import GlobalHeader from './GlobalHeader';
import MobileHeader from './MobileHeader';
import Sidebar from './Sidebar';
import styles from './Layout.module.scss';
import 'normalize.css';
import './styles.scss';

const Layout = ({ children }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <GlobalHeader />
      <MobileHeader
        className={styles.hideOnDesktop}
        isOpen={isMobileNavOpen}
        toggle={() => setIsMobileNavOpen(!isMobileNavOpen)}
      />
      <div className={cx(styles.main, 'site-container')}>
        <Sidebar className={cx(styles.hideOnMobile)} />
        <div
          className={cx(styles.contentContainer, {
            [styles.hideOnMobile]: isMobileNavOpen,
          })}
        >
          <main className={styles.content}>{children}</main>
          <Footer className={styles.footer} />
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
