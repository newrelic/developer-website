import React from 'react';
import PropTypes from 'prop-types';

const CodeSnippet = ({ children, copy }) => (
  <div className="CodeSnippet">
    <div className="CodeSnippet-code">{children}</div>
    {copy !== 'false' && <div className="CodeSnippet-copy">COPY ME</div>}
  </div>
);

CodeSnippet.propTypes = {
  children: PropTypes.node.isRequired,
  copy: PropTypes.string, // TODO: limit options
};

CodeSnippet.defaultProps = {
  copy: 'true',
};

export default CodeSnippet;
