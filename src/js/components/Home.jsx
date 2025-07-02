import React, { useEffect, useState, useRef } from "react";
import SecondsCounter from "./SecondsCounter";

const Home = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isCountdown, setIsCountdown] = useState(false);
  const [startValue, setStartValue] = useState(0);
  const [alertAt, setAlertAt] = useState(null);
  const intervalRef = useRef(null);

  // Timer Logic
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev =>
          isCountdown ? Math.max(0, prev - 1) : prev + 1
        );
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, isCountdown]);

  // Trigger alert
  useEffect(() => {
    if (alertAt !== null && seconds === alertAt) {
      alert(`⏰ Alert! Time reached: ${alertAt} seconds.`);
    }
  }, [seconds, alertAt]);

  // Controls
  const startTimer = () => {
    if (isCountdown) {
      setSeconds(startValue);
    } else {
      setSeconds(0);
    }
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(isCountdown ? startValue : 0);
  };

  const resumeTimer = () => {
    setIsRunning(true);
  };

  return (
    <div className="text-center mt-5">
      <h1 className="mb-4">⏱️ Neon Seconds Counter</h1>

      <SecondsCounter seconds={seconds} />

      <div className="mt-4">
        <div className="form-check form-switch d-inline-block mx-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="countdownSwitch"
            checked={isCountdown}
            onChange={(e) => setIsCountdown(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="countdownSwitch">
            Countdown Mode
          </label>
        </div>

        {isCountdown && (
          <input
            type="number"
            className="form-control d-inline-block w-auto mx-2"
            placeholder="Start at..."
            value={startValue}
            onChange={(e) => setStartValue(Number(e.target.value))}
          />
        )}

        <input
          type="number"
          className="form-control d-inline-block w-auto mx-2"
          placeholder="Alert at (sec)"
          value={alertAt ?? ""}
          onChange={(e) => setAlertAt(Number(e.target.value))}
        />
      </div>

      <div className="mt-4">
        <button className="btn btn-success mx-1" onClick={startTimer}>
          Start
        </button>
        <button className="btn btn-warning mx-1" onClick={stopTimer}>
          Stop
        </button>
        <button className="btn btn-secondary mx-1" onClick={resetTimer}>
          Reset
        </button>
        <button className="btn btn-info mx-1" onClick={resumeTimer} disabled={isRunning}>
          Resume
        </button>
      </div>

      <p className="mt-4 text-muted">
        Made with ❤️ by <a href="https://www.4geeksacademy.com">4Geeks Academy</a>
      </p>
    </div>
  );
};

export default Home;
