import React from 'react';
import QuickButton from './QuickButton';

const QuickSetTray = ({ onQuickSet }) => {
  const quickOptions = [
    { label: '5 min', duration: 300 },
    { label: '15 min', duration: 900 },
    { label: '30 min', duration: 1800 }
  ];

  return (
    <div className="quick-set-tray">
      {quickOptions.map((option, index) => (
        <QuickButton
          key={index}
          label={option.label}
          duration={option.duration}
          onQuickSet={onQuickSet}
        />
      ))}
    </div>
  );
};

export default QuickSetTray;