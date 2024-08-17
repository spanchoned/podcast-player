import React from 'react';
import '../styles/musicCard.css';
import image from './assets/imgs';


const MusicCard = ({ title, artist }) => {
  return (
    <div className="music-card">
      <img src="cover.jpg" alt={title} /> {/* Aquí iría la imagen de portada */}
      <h3>{title}</h3>
      <p>{artist}</p>
    </div>
  );
};

export default MusicCard;
