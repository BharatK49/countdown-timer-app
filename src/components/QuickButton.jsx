import React from 'react';

const QuickButton = ({ label, duration, onQuickSet }) => {
  return (
    <button
      className="quick-button"
      onClick={() => onQuickSet(duration)}
    >
      {label}
    </button>
  );
};

export default QuickButton;