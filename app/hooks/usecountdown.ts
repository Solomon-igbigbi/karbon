'use client'
import React, { useState, useEffect } from 'react';

interface ICountDown {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const useCountdownTimer = (endDate: Date) => { // Ensure endDate parameter is of type Date
  const calculateTimeLeft = () => {
    const difference = endDate.getTime() - new Date().getTime(); // Calculate time difference in milliseconds
    let timeLeft: ICountDown = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return timeLeft;
};

export default useCountdownTimer;
