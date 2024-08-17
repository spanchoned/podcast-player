import React from 'react';
import '../styles/header.css';


const Header = () => {
  return (
    <div className="header">
      <input type="text" placeholder="Search..." />
      <div className="avatar">👤</div>
    </div>
  );
};

export default Header;
