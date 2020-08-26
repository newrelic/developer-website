import React, { useEffect } from 'react';
import Countdown from './Countdown';
import PropTypes from 'prop-types';
import styles from './CountdownContainer.module.scss';

const CountdownContainer = ({ countdownDate, inactiveMessage }) => {
  const [countdown, setCountdown] = React.useState(() => getRemainingTime());
  let active = countdown.milliseconds > 0;

  useEffect(() => {
    const hasRemainingTime = () => {
      const { milliseconds } = getRemainingTime();
      return milliseconds > 0;
    };

    if (!hasRemainingTime()) {
      active = false;
      return;
    }

    const interval = setInterval(() => {
      const {
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
      } = getRemainingTime();

      if (milliseconds < 0) {
        active = false;
        clearInterval(interval);
      } else {
        setCountdown({ days, hours, minutes, seconds, milliseconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getRemainingTime() {
    let countDownDate = new Date(countdownDate).toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
    });
    countDownDate = new Date(countDownDate).getTime();

    const now = new Date().getTime();

    const milliseconds = countDownDate - now;

    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, milliseconds };
  }

  return (
    <div className={styles.container}>
      {active === true ? (
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
  countdownDate: PropTypes.string,
  inactiveMessage: PropTypes.string,
};

export default CountdownContainer;
