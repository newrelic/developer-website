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
        <Sidebar className={styles.hideOnMobile} />
        <main
          className={cx(styles.content, {
            [styles.hideOnMobile]: isMobileNavOpen,
          })}
        >
          {children}
        </main>
      </div>
      <Footer
        className={cx({
          [styles.hideOnMobile]: isMobileNavOpen,
        })}
      />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
