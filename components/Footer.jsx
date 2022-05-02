import React from 'react';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Audiophile Haven All rights reserved</p>
      <p className='icons'>
        <a href="https://www.instagram.com/bbfosho0/"> 
        <AiFillInstagram />
        </a>
        <a href="https://www.linkedin.com/in/yoshigutierrez/">
        <AiFillLinkedin />
        </a>
        
      </p>
    </div>
  )
}

export default Footer