import React from 'react';
import '../styles/Spotify.css';

function Spotify() {
  return (
    <div className="spotify">
      <iframe
        title="Spotify"
        style={ { borderRadius: '12px' } }
        src="https://open.spotify.com/embed/track/2xql0pid3EUwW38AsywxhV?utm_source=generator&theme=0"
        width="75%"
        height="250"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}

export default Spotify;
