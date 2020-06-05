import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';
import styles from './Layout.module.scss';
import './styles.scss';

const pages = [
  { displayName: 'Collect Data', url: '/collect-data' },
  { displayName: 'Explore Data', url: '/explore-data' },
  { displayName: 'Build Apps', url: '/build-apps' },
  { displayName: 'Automate Workflows', url: '/automate-workflows' },
  { displayName: 'Developer Docs', url: '/docs' },
];

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Header pages={pages} />
    <main>{children}</main>
    <Footer pages={pages} />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
