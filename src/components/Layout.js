import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './Layout.module.scss';
import pages from '../data/sidenav.json';
import './styles.scss';

const Layout = ({ children, showEdit }) => (
  <>
    <Header />
    <div className={styles.layout}>
      <Sidebar pages={pages} />
      <main>{children}</main>
    </div>
    <Footer showEdit={showEdit} />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showEdit: PropTypes.bool,
};

Layout.defaultProps = {
  showEdit: true,
};

export default Layout;
