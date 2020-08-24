import React from 'react';
import styles from './CountdownContainer.module.scss'

const CountdownUnit = ({ unit, label }) => {
  return (
    <div className={styles.countdownUnit}>
      <h2 className={styles.label}>{unit}</h2>
      <p className={styles.label}>{label}</p>
    </div>
  );
};

export default CountdownUnit;
