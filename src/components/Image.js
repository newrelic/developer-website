import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
  return <img {...props} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
};

Image.defaultProps = {
  width: 1200,
};

export default Image;
