import React, { useState, useEffect, useRef } from "react";
import "./timerDashboard.css";

const TimerDashboard = () => {
  document.title = "Timer-App";
  const [timerState, setTimerState] = useState("stopped");
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    setTimerState("running");
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setTimerState("paused");
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    setTimerState("stopped");
    clearInterval(timerRef.current);
    setTime(0);
  };

  const renderStartPauseButton = () => {
    if (timerState === "stopped" || timerState === "paused") {
      return <button onClick={startTimer}>Start</button>;
    } else if (timerState === "running") {
      return <button onClick={stopTimer}>Pause</button>;
    }
  };

  // Format seconds into HH:mm:ss
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;

    return formattedTime;
  };

  return (
    <div className="timer_container">
      <h1>Your Timer App</h1>
      <div className="timer_display">{formatTime(time)}</div>
      <div className="timer_control_btns">
        {renderStartPauseButton()}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default TimerDashboard;
