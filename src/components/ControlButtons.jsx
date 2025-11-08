// Control Buttons parent component
import React from 'react';
import StartButton from './StartButton';
import StopButton from './StopButton';
import ResetButton from './ResetButton';

const ControlButtons = ({ isRunning, onStart, onStop, onReset, hasTime }) => {
  return (
    <div className="control-buttons">
      {!isRunning ? (
        <StartButton 
          onStart={onStart} 
          disabled={!hasTime} 
        />
      ) : (
        <StopButton 
          onStop={onStop} 
          disabled={false} 
        />
      )}
      <ResetButton onReset={onReset} />
    </div>
  );
};

export default ControlButtons;