import React from 'react';
import '../styles/Header.css';
import bannerMobile from '../imgs/bannermobile.png';
import bannerImage from '../imgs/bannerImage.png';
import profilepic from '../imgs/pfpic.png';

function getBannerImagePath() {
  if (typeof window !== 'undefined' && window.matchMedia('(min-width: 1000px)').matches) {
    return bannerImage;
  }
  return bannerMobile;
}

function Header() {
  return (
    <header className="header">
      <img
        alt="profilepic"
        className="profilepic"
        src={ profilepic }
      />
      <img
        alt="banner"
        className="banner"
        src={ getBannerImagePath() }
      />
    </header>
  );
}

export default Header;
