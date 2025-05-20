"use client";
import { useEffect, useState } from "react";

export default function useTimeDiff(startDate: Date) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const diff = startDate.getTime() - now.getTime();
      const days = diff / (1000 * 60 * 60 * 24);
      const hours = (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
      const minutes = (diff % (1000 * 60 * 60)) / (1000 * 60);
      const seconds = (diff % (1000 * 60)) / 1000;
      setTimeLeft({
        days: Math.floor(days),
        hours: Math.floor(hours),
        minutes: Math.floor(minutes),
        seconds: Math.floor(seconds),
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [startDate]);

  return timeLeft;
}
