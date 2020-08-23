import React from "react";

const CountdownUnit = ({ unit, label }) => {
  return (
    <div
      style={{
        color: "rgb(232, 234, 234)",
        marginLeft: "10px"
      }}
    >
      <h2>{unit}</h2>
      <p>{label}</p>
    </div>
  );
};

export default CountdownUnit;
