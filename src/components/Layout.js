import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import GlobalHeader from './GlobalHeader';
import MobileHeader from './MobileHeader';
import Sidebar from './Sidebar';
import styles from './Layout.module.scss';
import './styles.scss';

const Layout = ({ children }) => (
  <>
    <GlobalHeader />
    <MobileHeader className={styles.hideOnDesktop} />
    <div className={styles.layout}>
      <Sidebar className={styles.hideOnMobile} />
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
