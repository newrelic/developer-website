import React from 'react';
import PropTypes from 'prop-types';
import styles from './IconGallery.module.scss';

const IconGallery = ({ icons }) => {
  return (
    <>
      <h2>Icon Gallery</h2>
      <div className={styles.iconGrid}>
        {icons.map((icon, index) => (
          <div key={index}>{icon.slice(-5)}</div>
        ))}
      </div>
    </>
  );
};

IconGallery.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IconGallery;
