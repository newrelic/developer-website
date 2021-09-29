import React from 'react';
import MainLayout from './MainLayout';
import EmbedLayout from './EmbedLayout';
import QuickStartLayout from './QuickStartLayout';
import PropTypes from 'prop-types';

const Layout = ({ children, pageContext }) => {
  const isEmbed = pageContext.layout && pageContext.layout === 'EmbedLayout';
  const isQuickStart =
    pageContext.layout && pageContext.layout === 'QuickStartLayout';
  if (pageContext.fileRelativePath.match(/404/)) {
    return children;
  }
  if (isEmbed) {
    return <EmbedLayout>{children}</EmbedLayout>;
  }
  if (isQuickStart) {
    return <QuickStartLayout>{children}</QuickStartLayout>;
  }
  return <MainLayout pageContext={pageContext}>{children}</MainLayout>;
};

Layout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object,
};

export default Layout;
