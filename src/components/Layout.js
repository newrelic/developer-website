import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import GlobalHeader from './GlobalHeader';
import MobileHeader from './MobileHeader';
import Sidebar from './Sidebar';
import styles from './Layout.module.scss';
import './styles.scss';

const Layout = ({ children }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <GlobalHeader />
      <MobileHeader
        className={styles.hideOnDesktop}
        isOpen={isMobileNavOpen}
        toggle={() => setIsMobileNavOpen(!isMobileNavOpen)}
      />
      <div className={styles.layout}>
        <Sidebar className={styles.hideOnMobile} />
        <main className={isMobileNavOpen && styles.hideOnMobile}>
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
