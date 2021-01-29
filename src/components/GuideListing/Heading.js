import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ children, className }) => (
  <h2 className={className}>{children}</h2>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Heading;
