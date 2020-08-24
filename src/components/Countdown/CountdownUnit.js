import React from 'react';
import styles from './CountdownContainer.module.scss';
import PropTypes from 'prop-types';

const CountdownUnit = ({ value, label }) => {
  return (
    <div className={styles.countdownUnit}>
      <h2>{value}</h2>
      <p>{label}</p>
    </div>
  );
};

CountdownUnit.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string,
};

export default CountdownUnit;
