import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Section;
