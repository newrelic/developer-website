import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './Layout.module.scss';
import pages from '../data/sidenav.json';
import './styles.scss';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <div className={cx(styles.main, 'site-container')}>
      <Sidebar pages={pages} />
      <main className={styles.content}>{children}</main>
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
