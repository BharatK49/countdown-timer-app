import React from 'react';

const StatusBar = ({ statusText }) => {
  return (
    <div className="status-bar">
      {statusText}
    </div>
  );
};

export default StatusBar;