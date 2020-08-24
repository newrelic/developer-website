import React, { useEffect } from 'react';
import Countdown from './Countdown';
import styles from './CountdownContainer.module.scss';

const CountdownContainer = () => {
  const [countdown, setCountdown] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [active, setActive] = React.useState(false);

  useEffect(() => {
    getRemainingTime();

    const interval = setInterval(() => {
      getRemainingTime();
      if (getRemainingTime() < 0) {
        setActive(false);
        clearInterval(interval);
      }
    }, 1000);

  }, []);

  const getRemainingTime = () => {
    const countDownDate = new Date('September 1, 2020 23:59:59').getTime();
    const now = new Date().getTime();
    const difference = countDownDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setCountdown({ days, hours, minutes, seconds });

    if (difference >= 0) {
      setActive(true);
    }

    return difference;
  };

  return (
    <div className={styles.container}>
      {
        active ? (
        <div className={styles.countdownContainer}>
          <Countdown countdown={countdown} />
        </div> 
        ) : (
        <p className={styles.closedSubmittions}>Submissions are closed</p>
        )
      }
    </div>
  );
};

export default CountdownContainer;
