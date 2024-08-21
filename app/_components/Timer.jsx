"use client";

import React, { useEffect, useRef } from "react";

const Timer = () => {
  const timeInputRef = useRef(null);

  useEffect(() => {
    // Get the saved seconds from localStorage, or start from 0 if none is found
    let seconds = parseInt(localStorage.getItem("timerSeconds") || "0", 10);

    const updateTime = () => {
      // Reset the timer every 2 hours (7200 seconds)
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

      // Save the current seconds count to localStorage
      localStorage.setItem("timerSeconds", seconds.toString());

      seconds++;
    };

    // Initial time update
    updateTime();

    const intervalId = setInterval(updateTime, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

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
