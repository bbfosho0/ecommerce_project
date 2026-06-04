import React from 'react';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <h2>Audiophile Haven</h2>
        <p>
          Premium audio essentials powered by live Sanity product content and
          secure Stripe checkout.
        </p>
      </div>

      <div className='footer-meta'>
        <p>2022 Audiophile Haven All rights reserved</p>
        <p className='icons'>
          <a href="https://www.instagram.com/bbfosho0/" aria-label="Audiophile Haven on Instagram">
            <AiFillInstagram aria-hidden='true' />
        </a>
          <a href="https://www.linkedin.com/in/yoshigutierrez/" aria-label="Yoshi Gutierrez on LinkedIn">
            <AiFillLinkedin aria-hidden='true' />
        </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
