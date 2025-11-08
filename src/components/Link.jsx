// Link Component (child component of Footer)
import React from 'react';

const Link = ({ href, label }) => {
  return (
    <a href={href} className="footer-link" target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
};

export default Link;