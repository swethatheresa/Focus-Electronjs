import React, { useState, useEffect } from 'react';
import './SetTimer.css';

function SetTimer({ minutes }) {
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60);

  useEffect(() => {
    if (secondsLeft === 0) {
      playNotificationSound();
      saveTimer();
    } else {
      const timerId = setInterval(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [secondsLeft]);

  const playNotificationSound = () => {
    const notificationSound = new Audio('/notification.mp3');
    notificationSound.play();
  };

  const saveTimer = () => {
    const now = new Date();
    const timerData = { secondsLeft, date: now.toISOString() };
    localStorage.setItem('timer', JSON.stringify(timerData));
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div className="timer-container">
      <div className="timer-display">{formatTime(secondsLeft)}</div>
    </div>
  );
}

export default SetTimer;
