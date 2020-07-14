import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ alt, ...props }) => {
  return <img alt={alt} {...props} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

Image.defaultProps = {
  height: 400,
  width: 'auto',
};

export default Image;
