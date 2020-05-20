import React from 'react';
import PropTypes from 'prop-types';
import './CodeSnippet.scss';

const CodeSnippet = ({ children }) => (
  <>
    <div className="CodeSnippet">{children}</div>
    <div className="CodeSnippet-copyBar" />
  </>
);

CodeSnippet.propTypes = {
  children: PropTypes.node,
};

export default CodeSnippet;
