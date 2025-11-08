import React from 'react';

const StopButton = ({ onStop, disabled }) => {
  return (
    <button
      className="control-button stop-button"
      onClick={onStop}
      disabled={disabled}
    >
      Stop
    </button>
  );
};

export default StopButton;