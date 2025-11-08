import React from 'react';
import HoursInput from './HoursInput';
import MinutesInput from './MinutesInput';
import SecondsInput from './SecondsInput';

const TimeSetter = ({ hours, minutes, seconds, onHoursChange, onMinutesChange, onSecondsChange }) => {
  return (
    <div className="time-setter">
      <HoursInput value={hours} onChange={onHoursChange} />
      <MinutesInput value={minutes} onChange={onMinutesChange} />
      <SecondsInput value={seconds} onChange={onSecondsChange} />
    </div>
  );
};

export default TimeSetter;