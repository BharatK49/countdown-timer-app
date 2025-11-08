import React from 'react';

const ResetButton = ({ onReset }) => {
  return (
    <button
      className="control-button reset-button"
      onClick={onReset}
    >
      Reset
    </button>
  );
};

export default ResetButton;