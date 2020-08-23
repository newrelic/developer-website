import React, { useEffect } from "react";
import Countdown from "./Countdown";

const CountdownContainer = () => {
  const [countdown, setCountdown] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    let countDownDate = new Date("Sept 1, 2020 23:59:59").getTime();

    setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);
  }, []);

  return (
    <div
      className="countdown-container"
      style={{
        border: "1px solid rgb(146, 189, 196)",
        height: "150px",
        width: "600px",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Countdown countdown={countdown} />
    </div>
  );
};

export default CountdownContainer;
