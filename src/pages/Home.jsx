import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Content from '../components/Content';
import Content from '../components/MusicCard';
import "../styles/home.css";
import "../styles/header.css";
import "../styles/content.css";
import "../styles/sidebar.css";
import "../styles/musicCard.css";
import image from './assets/imgs';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default Home;
