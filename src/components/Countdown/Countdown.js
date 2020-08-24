import React from 'react';
import CountdownUnit from './CountdownUnit';
import PropTypes from 'prop-types';
import styles from './CountdownContainer.module.scss';

const Countdown = ({ countdown }) => {
  return (
    <div className={styles.countdown}>
      <CountdownUnit value={countdown.days} label="Days" />
      <h2>:</h2>
      <CountdownUnit value={countdown.hours} label="Hours" />
      <h2>:</h2>
      <CountdownUnit value={countdown.minutes} label="Minutes" />
      <h2>:</h2>
      <CountdownUnit value={countdown.seconds} label="Seconds" />
    </div>
  );
};

Countdown.propTypes = {
  countdown: PropTypes.number,
};

export default Countdown;
