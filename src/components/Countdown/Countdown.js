import React from 'react';
import CountdownUnit from './CountdownUnit';
import PropTypes from 'prop-types';
import styles from './CountdownContainer.module.scss';

const Countdown = ({ countdown }) => {
  return (
    <div className={styles.countdown}>
      <CountdownUnit unit={countdown.days} label='Days' />
      <h2>:</h2>
      <CountdownUnit unit={countdown.hours} label='Hours' />
      <h2>:</h2>
      <CountdownUnit unit={countdown.minutes} label='Minutes' />
      <h2>:</h2>
      <CountdownUnit unit={countdown.seconds} label='Seconds' />
    </div>
  );
};

Countdown.propTypes = {
  countdown: PropTypes.number
};

export default Countdown;
