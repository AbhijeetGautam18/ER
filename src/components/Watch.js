import React, { useState, useEffect } from 'react';
import './Watch.css';

const Watch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const currentDay = days[time.getDay()];
  const currentDate = time.getDate();
  const currentMonth = months[time.getMonth()];
  const currentYear = time.getFullYear();

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Convert hours to 12-hour format
  const formattedHours = hours % 12 || 12;

  // Add leading zeros to minutes and seconds
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="watch">
      <div className="circle">
        <div className="watch-face">
          <div className="watch-time">
            <span className="hours">{formattedHours}</span>
            <span className="separator">:</span>
            <span className="minutes">{formattedMinutes}</span>
            <span className="separator">:</span>
            <span className="seconds">{formattedSeconds}</span>
          </div>
          <div className="watch-date">
            <span className="day">{currentDay}</span>
            <span className="date">{currentDate}</span>
            <span className="month">{currentMonth}</span>
            <span className="year">{currentYear}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
