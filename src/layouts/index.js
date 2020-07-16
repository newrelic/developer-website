import React from 'react';
import MainLayout from './MainLayout';
import PropTypes from 'prop-types';

const Layout = ({ children, pageContext }) => {
  console.log(pageContext);
  if (pageContext.fileRelativePath.match(/404/)) {
    return children;
  }
  return <MainLayout>{children}</MainLayout>;
};

Layout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object,
};

export default Layout;
