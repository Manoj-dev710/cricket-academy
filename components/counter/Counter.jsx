"use client";
import React, { useEffect, useState } from "react";

const Counter = ({ counterNumber, counterText }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setCounter(count);
      if (count === counterNumber) {
        clearInterval(interval);
      }
    }, 50);
  }, []);

  return (
    <div>
      <div className="counter text-center">{counter}</div>
      <div className="counterText text-center">{counterText}</div>
      
    </div>
  );
};

export default Counter;
