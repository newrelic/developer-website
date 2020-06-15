import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './Layout.module.scss';
import pages from '../data/sidenav.json';
import './styles.scss';

const Layout = ({ children }) => (
  <>
    <Header />
    <div className={styles.layout}>
      <Sidebar pages={pages} />
      <main>{children}</main>
    </div>
    <Footer pages={pages} />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
