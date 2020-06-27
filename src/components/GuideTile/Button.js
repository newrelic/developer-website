import React from 'react';
import PropTypes from 'prop-types';
import styles from './GuideTile.module.scss';

const Button = ({ onClick, text }) => (
  <button type="button" className={styles.button} onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
