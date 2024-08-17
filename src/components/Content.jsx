import React from 'react';
import MusicCard from './MusicCard';
import '../styles/content.css';


const Content = () => {
  return (
    <div className="content">
      <h2>Listen Again</h2>
      <div className="music-cards">
        {/* Puedes repetir este componente con distintas props para múltiples tarjetas */}
        <MusicCard title="Song Title" artist="Artist Name" />
        <MusicCard title="Another Song" artist="Another Artist" />
      </div>
    </div>
  );
};

export default Content;
