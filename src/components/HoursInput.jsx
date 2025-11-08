// Input Hours component (child component of TimeSetter component)
import React from 'react';

const HoursInput = ({ value, onChange }) => {
  return (
    <div className="time-input-group">
      <label>Hours</label>
      <input
        type="number"
        min="0"
        max="23"
        value={value}
        onChange={(e) => onChange(Math.max(0, Math.min(23, parseInt(e.target.value) || 0)))}
        className="time-input"
      />
    </div>
  );
};

export default HoursInput;