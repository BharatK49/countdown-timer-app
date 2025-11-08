import React from 'react';

const StartButton = ({ onStart, disabled }) => {
  return (
    <button
      className="control-button start-button"
      onClick={onStart}
      disabled={disabled}
    >
      Start
    </button>
  );
};

export default StartButton;