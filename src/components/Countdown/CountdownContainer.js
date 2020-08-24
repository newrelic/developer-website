import React, { useEffect } from 'react';
import Countdown from './Countdown';
import styles from './CountdownContainer.module.scss';

const CountdownContainer = () => {
  const [countdown, setCountdown] = React.useState(() => getRemainingTime());
  const [active, setActive] = React.useState(() => {
    const { milliseconds } = getRemainingTime();
    return milliseconds > 0;
  });

  useEffect(() => {
    const hasRemainingTime = () => {
      const { milliseconds } = getRemainingTime();
      return milliseconds > 0;
    };

    if (!hasRemainingTime()) {
      setActive(false);
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
        setActive(false);
        clearInterval(interval);
      } else {
        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);
  }, []);

  function getRemainingTime() {
    const countDownDate = new Date('September 1, 2020 23:59:59').getTime();
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
      {active ? (
        <div className={styles.countdownContainer}>
          <Countdown countdown={countdown} />
        </div>
      ) : (
        <p>Submissions are closed</p>
      )}
    </div>
  );
};

export default CountdownContainer;
