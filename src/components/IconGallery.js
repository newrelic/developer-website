import React from 'react';
import PropTypes from 'prop-types';

const IconGallery = ({ icons }) => {
  return (
    <>
      <h2>Icon Gallery</h2>
      <ul>
        {icons.map((icon, index) => (
          <li key={index}>{icon}</li>
        ))}
      </ul>
    </>
  );
};

IconGallery.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IconGallery;
