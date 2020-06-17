import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import GlobalHeader from './GlobalHeader';
import Sidebar from './Sidebar';
import styles from './Layout.module.scss';
import pages from '../data/sidenav.json';
import './styles.scss';

const Layout = ({ children }) => (
  <>
    <GlobalHeader />
    <div className={styles.layout}>
      <Sidebar className={styles.sidebar} pages={pages} />
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
