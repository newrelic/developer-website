import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, width }) => {
  return <img src={src} alt={alt} width={width} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
};

Image.defaultProps = {
  width: 1200,
};

export default Image;
