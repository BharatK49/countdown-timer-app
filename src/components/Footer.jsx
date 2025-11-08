import React from 'react';
import Credits from './Credits';
import Link from './Link';

const Footer = () => {
  return (
    <footer className="footer">
      <Credits text="Built with React" />
      <Link href="https://github.com" label="GitHub" />
    </footer>
  );
};

export default Footer;