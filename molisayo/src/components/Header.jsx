import React from 'react';
import banner from '../imgs/bannerImage.png';
import profilepic from '../imgs/pfpic.png';

function Header() {
  return (
    <header>
      <img alt="banner" src={ banner } />
      <img alt="profilepic" src={ profilepic } />
    </header>
  );
}

export default Header;
