import React from 'react';
import PropTypes from 'prop-types';
import MDXContainer from '../MDXContainer';
import { Layout } from '@newrelic/gatsby-theme-newrelic';

const MarkdownContent = ({ children }) => (
  <Layout.Content>
    <MDXContainer>{children}</MDXContainer>
  </Layout.Content>
);

MarkdownContent.propTypes = {
  children: PropTypes.node,
};

export default MarkdownContent;
