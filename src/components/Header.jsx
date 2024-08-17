import React from 'react';
import '../styles/header.css';
import logo from '../assets/react.svg'


const Header = () => {
  return (
    <div className="header">
      <svg src={logo} alt="Logo de YouTube después"></svg>
      <input type="text" placeholder="Search..." />
      <div className="avatar">👤</div>
    </div>
  );
};

export default Header;
