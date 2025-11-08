import React from 'react';
import TimeSetter from './TimeSetter';
import TimerDisplay from './TimerDisplay';
import ControlButtons from './ControlButtons';

const TimerBox = ({ 
  hours, 
  minutes, 
  seconds, 
  time, 
  isRunning, 
  onHoursChange, 
  onMinutesChange, 
  onSecondsChange, 
  onStart, 
  onStop, 
  onReset 
}) => {
  const hasTime = time > 0;

  return (
    <div className="timer-box">
      <TimeSetter
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        onHoursChange={onHoursChange}
        onMinutesChange={onMinutesChange}
        onSecondsChange={onSecondsChange}
      />
      <TimerDisplay time={time} />
      <ControlButtons
        isRunning={isRunning}
        onStart={onStart}
        onStop={onStop}
        onReset={onReset}
        hasTime={hasTime}
      />
    </div>
  );
};

export default TimerBox;