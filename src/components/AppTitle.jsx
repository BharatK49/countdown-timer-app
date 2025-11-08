// App Title component (child component of Header)
import React from 'react';

const AppTitle = ({ text }) => {
  return <h1 className="app-title">{text}</h1>;
};

export default AppTitle;