import React, { useState } from 'react';
import '../styles/InteractiveKarma.css';
import axios from 'axios';
import ReactPlayer from 'react-player';
import Karma from '../imgs/pipoca.gif';

function InteractiveKarma() {
  const [dogImageUrl, setDogImageUrl] = useState('');
  const [showDogImage, setShowDogImage] = useState(false);
  const soundUrl = 'https://soundcloud.com/michael-robert-17143954/nyanners-nyaah?si=2acbd0a597f145c9befe9516b30de493&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';

  const fetchDogImage = async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    setDogImageUrl(response.data.message);
    setShowDogImage(true);
  };

  const handleKeyPress = (event, callback) => {
    if (event.key === 'Enter' || event.key === ' ') {
      callback();
    }
  };

  return (
    <div className="karma">
      <div
        className="b"
        role="button"
        tabIndex="0"
        onClick={ fetchDogImage }
        onKeyPress={ (event) => handleKeyPress(event, fetchDogImage) }
      >
        <img
          className="karma-img"
          alt="karma button"
          src={ Karma }
        />
      </div>
      {showDogImage && (
        <div
          className="dog-image-container"
          role="button"
          tabIndex="0"
          onClick={ () => setShowDogImage(false) }
          onKeyPress={ (event) => handleKeyPress(event, () => setShowDogImage(false)) }
        >
          <img
            className="dog-image"
            alt="random dog"
            src={ dogImageUrl }
            style={ { width: '60%', height: '60%', objectFit: 'fit' } }
          />
        </div>
      )}
      <ReactPlayer
        url={ soundUrl }
        playing={ showDogImage }
        width="0"
        height="0"
      />
    </div>
  );
}

export default InteractiveKarma;
