import React, { useState, useEffect } from 'react';
import './app.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [time, setTime] = useState(300); // Default 5 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [initialTime, setInitialTime] = useState(300);
  
  // Input states
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSecondsInput] = useState(0);

  // Update time when inputs change
  useEffect(() => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    if (!isRunning) {
      setTime(totalSeconds);
      setInitialTime(totalSeconds);
    }
  }, [hours, minutes, seconds, isRunning]);

  // Timer countdown effect
  useEffect(() => {
    let interval = null;
    
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (!isRunning) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  // Handlers
  const handleStart = () => {
    if (time > 0) {
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(initialTime);
  };

  const handleQuickSet = (duration) => {
    if (!isRunning) {
      const h = Math.floor(duration / 3600);
      const m = Math.floor((duration % 3600) / 60);
      const s = duration % 60;
      
      setHours(h);
      setMinutes(m);
      setSecondsInput(s);
      setTime(duration);
      setInitialTime(duration);
    }
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Status text
  const getStatusText = () => {
    if (time === 0 && !isRunning && initialTime > 0) {
      return "Time's up!";
    }
    if (isRunning) {
      return "Timer is running...";
    }
    if (time > 0) {
      return "Ready to start";
    }
    return "Set a time or use a quick button to start!";
  };

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <MainContainer
        theme={theme}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        time={time}
        isRunning={isRunning}
        onHoursChange={setHours}
        onMinutesChange={setMinutes}
        onSecondsChange={setSecondsInput}
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
        onQuickSet={handleQuickSet}
        statusText={getStatusText()}
      />
      <Footer />
    </div>
  );
};

export default App;