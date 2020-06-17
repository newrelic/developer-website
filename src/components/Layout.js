import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import GlobalHeader from './GlobalHeader';
import MobileHeader from './MobileHeader';
import Sidebar from './Sidebar';
import styles from './Layout.module.scss';
import './styles.scss';

const Layout = ({ children }) => {
  const [isMobileNavuOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <GlobalHeader />
      <MobileHeader
        className={styles.hideOnDesktop}
        isOpen={isMobileNavuOpen}
        toggle={() => setIsMobileNavOpen(!isMobileNavuOpen)}
      />
      <div className={styles.layout}>
        <Sidebar className={styles.hideOnMobile} />
        <main className={isMobileNavuOpen && styles.hideOnMobile}>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
