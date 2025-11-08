import React from 'react';

const TimerDisplay = ({ time }) => {
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const isWarning = time <= 10 && time > 0;

  return (
    <div className={`timer-display ${isWarning ? 'warning' : ''}`}>
      {formatTime(time)}
    </div>
  );
};

export default TimerDisplay;