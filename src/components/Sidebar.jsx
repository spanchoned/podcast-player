import React from 'react';
import '../styles/sidebar.css';
import image from './assets/imgs';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Music</h2>
      <ul>
        <li>Home</li>
        <li>Explore</li>
        <li>Your Library</li>
        <li>New Playlist</li>
      </ul>
    </div>
  );
};

export default Sidebar;
