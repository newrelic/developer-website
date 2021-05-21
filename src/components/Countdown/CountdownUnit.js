import React from 'react';
import * as styles from './CountdownContainer.module.scss';
import PropTypes from 'prop-types';

const CountdownUnit = ({ value, label }) => {
  return (
    <div className={styles.countdownUnit}>
      <span className={styles.colons}>{value}</span>
      <p>{label}</p>
    </div>
  );
};

CountdownUnit.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string,
};

export default CountdownUnit;
