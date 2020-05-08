import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';
import './styles.scss';

const Layout = ({ children }) => (
  <div className="Layout">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
