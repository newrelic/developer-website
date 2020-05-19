import React from 'react';
import PropTypes from 'prop-types';

const CodeSnippet = ({ children }) => <div>{children}</div>;

CodeSnippet.propTypes = {
  children: PropTypes.node,
};

export default CodeSnippet;
