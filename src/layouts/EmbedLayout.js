import React from 'react';
import { Layout } from '@newrelic/gatsby-theme-newrelic';
import PropTypes from 'prop-types';

const EmbedLayout = ({ children }) => {
  return <Layout.Main>{children}</Layout.Main>;
};

EmbedLayout.propTypes = {
  children: PropTypes.node,
};

export default EmbedLayout;
