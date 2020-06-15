import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './Layout.module.scss';
import pages from '../data/sidenav.json';
import './styles.scss';

// const pages = [
//   { displayName: 'Collect data', url: '/collect-data' },
//   { displayName: 'Explore data', url: '/explore-data' },
//   { displayName: 'Build apps', url: '/build-apps' },
//   { displayName: 'Automate workflows', url: '/automate-workflows' },
//   { displayName: 'Developer docs', url: '/docs' },
// ];

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Header pages={pages} />
    <Sidebar pages={pages} />
    <main>{children}</main>
    <Footer pages={pages} />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
