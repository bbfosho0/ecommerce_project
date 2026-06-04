import React from 'react';
import Link from 'next/link';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        <div>
          <p className='section-eyebrow'>Premium audio storefront</p>
          <h2>Audiophile Haven</h2>
          <p>
            A polished consumer-tech ecommerce experience powered by live Sanity
            product content, persistent cart state, and secure Stripe checkout.
          </p>
        </div>

        <nav className='footer-links' aria-label='Footer navigation'>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/#products'>
            <a>Products</a>
          </Link>
          <Link href='/#shipping'>
            <a>Shipping</a>
          </Link>
          <a href='mailto:americanyosh@gmail.com'>Support</a>
        </nav>
      </div>

      <div className='footer-meta'>
        <div className='footer-proof'>
          <span>Live CMS catalog</span>
          <span>Stripe checkout</span>
          <span>Responsive storefront</span>
        </div>
        <p className='footer-contact'>Questions? americanyosh@gmail.com</p>
        <p className='icons'>
          <a href="https://www.instagram.com/bbfosho0/" aria-label="Audiophile Haven on Instagram">
            <AiFillInstagram aria-hidden='true' />
        </a>
          <a href="https://www.linkedin.com/in/yoshigutierrez/" aria-label="Yoshi Gutierrez on LinkedIn">
            <AiFillLinkedin aria-hidden='true' />
        </a>
        </p>
        <p className='footer-copy'>2022 Audiophile Haven. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
