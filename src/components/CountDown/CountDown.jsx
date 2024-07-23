import React, { useState, useEffect } from 'react';
import { CountDownStyle } from './CountDown.css';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-12-31T00:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        seg: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    // if (!timeLeft[interval]) {
    //   return;
    // }

    timerComponents.push(
      <span className='interval' key={interval}>
        <div className='time'>
            {timeLeft[interval]}
        </div>
        <div className='label'>
        {interval.toUpperCase()}
        </div>
      </span>
    );
  });

  return (
    <div className={CountDownStyle()}>
      {timerComponents}
    </div>
  );
}

export default Countdown;
