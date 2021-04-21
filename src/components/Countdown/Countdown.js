import React from 'react';
import CountdownUnit from './CountdownUnit';
import PropTypes from 'prop-types';
import * as styles from './CountdownContainer.module.scss';

const Countdown = ({ countdown }) => {
  return (
    <div className={styles.countdown}>
      <CountdownUnit value={countdown.days} label="Days" />
      <span className={styles.colons}>:</span>
      <CountdownUnit value={countdown.hours} label="Hours" />
      <span className={styles.colons}>:</span>
      <CountdownUnit value={countdown.minutes} label="Minutes" />
      <span className={styles.colons}>:</span>
      <CountdownUnit value={countdown.seconds} label="Seconds" />
    </div>
  );
};

Countdown.propTypes = {
  countdown: PropTypes.shape({
    days: PropTypes.number,
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
  }),
};

export default Countdown;
