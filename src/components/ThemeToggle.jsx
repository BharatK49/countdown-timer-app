import React from 'react';

const ThemeToggle = ({ theme, onToggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={onToggleTheme}>
      🌙
    </button>
  );
};

export default ThemeToggle;