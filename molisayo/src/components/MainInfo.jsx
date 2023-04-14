import React from 'react';
import '../styles/MainInfo.css';
import instagram from '../imgs/instagram.png';
import spotify from '../imgs/spotify.png';
import twitch from '../imgs/twitch.png';
import steam from '../imgs/steam.png';

function MainInfo() {
  return (
    <main>
      <div className="maininfo">
        <h1 className="name">🌹Trevosa🌹</h1>
        <h2>@miecanti</h2>
        <p>❝ Nunca torne-se um monstro para derrotar outro.❞</p>
        <p>
          Nem todas as tempestades vêm para atrapalhar a sua vida.
          Algumas vêm para limpar seu caminho.
        </p>
      </div>
      <socials className="socials">
        <img src={ instagram } alt="instagram" />
        <img src={ spotify } alt="spotify" />
        <img src={ twitch } alt="twitch" />
        <img src={ steam } alt="steam" />
      </socials>
    </main>
  );
}

export default MainInfo;
