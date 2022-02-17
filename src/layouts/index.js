import React from 'react';
import MainLayout from './MainLayout';
import EmbedLayout from './EmbedLayout';
import PropTypes from 'prop-types';

const Layout = ({ children, pageContext }) => {
  const isEmbed = pageContext.layout && pageContext.layout === 'EmbedLayout';
  if (pageContext.fileRelativePath.match(/404/)) {
    return children;
  }
  if (isEmbed) {
    return <EmbedLayout>{children}</EmbedLayout>;
  }
  return <MainLayout pageContext={pageContext}>{children}</MainLayout>;
};

Layout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object,
};

export default Layout;
