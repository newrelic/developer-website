import React, { useEffect } from 'react';
import Countdown from './Countdown';
import styles from './CountdownContainer.module.scss'

const CountdownContainer = () => {
    const [countdown, setCountdown] = React.useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
       getRemainingTime();
        setInterval(() => {
            getRemainingTime();
        }, 1000);
    },[]);

    const getRemainingTime = () => {
        let countDownDate = new Date('Sept 1, 2020 23:59:59').getTime();
        let now = new Date().getTime();
        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
    }

    return (
        <div className={styles.container}>
            <div className={styles.countdownContainer}>
                <Countdown countdown={countdown} />
            </div>
        </div>
    );
};

export default CountdownContainer;
