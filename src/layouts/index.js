import React from 'react';
import MainLayout from './MainLayout';
import PropTypes from 'prop-types';

const Layout = ({ children, pageContext }) => {
  if (
    pageContext.fileRelativePath.match(/404/) ||
    pageContext.fileRelativePath.match(/sdk-playground/) ||
    pageContext.fileRelativePath.match(/visualization-playground/)
  ) {
    return children;
  }
  return <MainLayout pageContext={pageContext}>{children}</MainLayout>;
};

Layout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object,
};

export default Layout;
