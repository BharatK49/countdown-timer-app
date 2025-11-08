import React from 'react';

const SecondsInput = ({ value, onChange }) => {
  return (
    <div className="time-input-group">
      <label>Seconds</label>
      <input
        type="number"
        min="0"
        max="59"
        value={value}
        onChange={(e) => onChange(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
        className="time-input"
      />
    </div>
  );
};

export default SecondsInput;