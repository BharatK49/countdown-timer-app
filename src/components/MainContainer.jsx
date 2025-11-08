// MainContainer Component (Parent Component)
import React from 'react';
import QuickSetTray from './QuickSetTray';
import TimerBox from './TimerBox';
import StatusBar from './StatusBar';

const MainContainer = ({ 
  theme,
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
  onReset,
  onQuickSet,
  statusText
}) => {
  return (
    <main className="main-container">
      <QuickSetTray onQuickSet={onQuickSet} />
      <TimerBox
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        time={time}
        isRunning={isRunning}
        onHoursChange={onHoursChange}
        onMinutesChange={onMinutesChange}
        onSecondsChange={onSecondsChange}
        onStart={onStart}
        onStop={onStop}
        onReset={onReset}
      />
      <StatusBar statusText={statusText} />
    </main>
  );
};

export default MainContainer;