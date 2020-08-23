import React from "react";
import CountdownUnit from "./CountdownUnit";
import CountdownColon from "./CountdownColon";

const Countdown = ({ countdown }) => {
  return (
    <div
      className="countdown"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%"
      }}
    >
      <CountdownUnit unit={countdown.days} label="Days" />
      <CountdownColon />
      <CountdownUnit unit={countdown.hours} label="Hours" />
      <CountdownColon />
      <CountdownUnit unit={countdown.minutes} label="Minutes" />
      <CountdownColon />
      <CountdownUnit unit={countdown.seconds} label="Seconds" />
    </div>
  );
};

export default Countdown;
