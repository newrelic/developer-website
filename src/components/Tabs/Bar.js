import React from 'react';
import PropTypes from 'prop-types';

const Bar = ({ children }) => (
  <div style={{ border: '1px solid red' }}>{children}</div>
);

Bar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Bar;
