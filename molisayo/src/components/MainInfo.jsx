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
        <h1 className="name">🌹trevosa🌹</h1>
        <h2 className="subname">@miecanti</h2>
        <socials className="socials">
          <a href="https://www.instagram.com/miecanti/">
            <img className="social" src={ instagram } alt="instagram" />
          </a>
          <a href="https://open.spotify.com/user/yg8huv1x84ndw1as7jyrec458">
            <img className="social" src={ spotify } alt="spotify" />
          </a>
          <a href="https://www.twitch.tv/itrevosa">
            <img className="social" src={ twitch } alt="twitch" />
          </a>
          <a href="https://steamcommunity.com/profiles/76561199056303228/">
            <img className="social" src={ steam } alt="steam" />
          </a>
        </socials>
        <p className="frase">❝ Nunca torne-se um monstro para derrotar outro.❞</p>
        <p className="frase2">
          Nem todas as tempestades vêm para atrapalhar a sua vida.
          Algumas vêm para limpar seu caminho.
        </p>
        <p className="frase3">Clica na Karminha bb? 😏</p>
      </div>
    </main>
  );
}

export default MainInfo;
