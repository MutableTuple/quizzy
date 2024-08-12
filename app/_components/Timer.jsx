"use client";

import React, { useEffect, useRef } from "react";

const Timer = () => {
  const timeInputRef = useRef(null);

  useEffect(() => {
    let seconds = 0;
    const updateTime = () => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
        remainingSeconds
      ).padStart(2, "0")}`;
      if (timeInputRef.current) {
        timeInputRef.current.value = formattedTime;
      }
      seconds++;
    };

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
