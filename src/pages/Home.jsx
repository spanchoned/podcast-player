import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Content from '../components/Content';
import MusicCard from '../components/MusicCard';
import "../styles/home.css";
import "../styles/header.css";
import "../styles/content.css";
import "../styles/sidebar.css";
import "../styles/musicCard.css";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="main-content">
        <Header />
        <MusicCard />
        <Content />
      </div>
    </div>
  );
};

export default Home;
