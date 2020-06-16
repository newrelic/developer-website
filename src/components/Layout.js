import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './Layout.module.scss';
import pages from '../data/sidenav.json';
import './styles.scss';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <div className={styles.main}>
      <Sidebar pages={pages} />
      <main className={styles.content}>{children}</main>
    </div>
    <Footer pages={pages} />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
