import React, { useEffect } from 'react';
import Countdown from './Countdown';
import PropTypes from 'prop-types';
import * as styles from './CountdownContainer.module.scss';

const getRemainingTime = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();
  const now = new Date().getTime();

  const milliseconds = countDownDate - now;

  const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, milliseconds };
};

const CountdownContainer = ({ targetDate, inactiveMessage }) => {
  const [countdown, setCountdown] = React.useState(() =>
    getRemainingTime(targetDate)
  );
  const active = countdown.milliseconds > 0;

  useEffect(() => {
    const hasRemainingTime = () => {
      const { milliseconds } = getRemainingTime(targetDate);
      return milliseconds > 0;
    };

    if (!hasRemainingTime()) {
      return;
    }

    const interval = setInterval(() => {
      const { days, hours, minutes, seconds, milliseconds } = getRemainingTime(
        targetDate
      );

      if (milliseconds < 0) {
        clearInterval(interval);
      } else {
        setCountdown({ days, hours, minutes, seconds, milliseconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={styles.container}>
      {active ? (
        <div className={styles.countdownContainer}>
          <Countdown countdown={countdown} />
        </div>
      ) : (
        <div className={styles.countdownContainer}>
          <p className={styles.inactiveMessage}>{inactiveMessage}</p>
        </div>
      )}
    </div>
  );
};

CountdownContainer.propTypes = {
  targetDate: PropTypes.string,
  inactiveMessage: PropTypes.string,
};

export default CountdownContainer;
