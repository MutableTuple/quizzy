"use client";

import React, { useEffect, useRef } from "react";

const Timer = () => {
  const timeInputRef = useRef(null);

  useEffect(() => {
    let seconds = parseInt(localStorage.getItem("timerSeconds") || "0", 10);

    const updateTime = () => {
      if (seconds >= 7200) {
        seconds = 0;
      }

      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
        remainingSeconds
      ).padStart(2, "0")}`;

      if (timeInputRef.current) {
        timeInputRef.current.value = formattedTime;
      }
      localStorage.setItem("timerSeconds", seconds.toString());
      seconds++;
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }); // `user` is here to trigger the useEffect if the user changes

  return (
    <input
      type="text"
      id="current_time"
      name="current_time"
      className="mb-4 focus:outline-none my-4 border-purple-400 py-2 rounded-lg text-center font-bold text-purple-800 border-2"
      defaultValue="00:00"
      ref={timeInputRef}
      readOnly
    />
  );
};

export default Timer;
