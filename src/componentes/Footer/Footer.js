import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <nav className='social-media'>
        <a href='#'><img  src='./img/footer/fb.png' alt='Facebook'/></a>
        <a href='#'><img  src='./img/footer/tw.png' alt='Twitter'/></a>
        <a href='#'><img  src='./img/footer/ig.png' alt='Instagram'/></a>
      </nav>
      <img src='./img/logo.png' alt='Logo Organo'/>
      <span>testetesteDesenvolvido por Carlos Junior.</span>
    </footer>
  )
}

export default Footer;