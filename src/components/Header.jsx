import React from 'react';
import '../styles/header.css';
import image from './assets/imgs';


const Header = () => {
  return (
    <div className="header">
      <input type="text" placeholder="Search..." />
      <div className="avatar">👤</div>
    </div>
  );
};

export default Header;
