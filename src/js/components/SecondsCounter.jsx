import React from "react";
import "../../styles/darkModern.css";  // go up two levels to reach styles


const SecondsCounter = ({ seconds }) => {
  const padded = seconds.toString().padStart(6, "0");
  const digits = padded.split("");

  return (
    <div className="counter-container" role="timer" aria-live="polite">
      <div className="clock-icon" aria-hidden="true">⏰</div>
      {digits.map((digit, i) => (
        <div key={i} className="counter-digit">{digit}</div>
      ))}
    </div>
  );
};

export default SecondsCounter;
