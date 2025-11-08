// Header Component (Parent component)
import React from 'react';
import Logo from './Logo';
import AppTitle from './AppTitle';
import ThemeToggle from './ThemeToggle';

const Header = ({ theme, onToggleTheme }) => {
  return (
    <header className="header">
      <div className="header-left">
        <Logo alt="Timer" />
        <AppTitle text="React Timer" />
      </div>
      <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
    </header>
  );
};

export default Header;