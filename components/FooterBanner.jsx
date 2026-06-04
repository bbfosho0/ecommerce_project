import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/image';

const FooterBanner = ({ footerBanner }) => {
  if (!footerBanner) return null;

  const { discount, largeText1, desc, largeText2, saleTime, smallText, midText, product, buttonText, image } = footerBanner;

  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p className="section-eyebrow">{discount}</p>
          <h3>{largeText1} {largeText2}</h3>
          <p>{saleTime}</p>
        </div>

        <div className="promo-media" aria-hidden="true">
          <img src={urlFor(image)} alt="" className="footer-banner-image" />
        </div>

        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <a className="button-secondary">{buttonText}</a>
          </Link>
        </div>
      </div>  
    </div>
  )
}

export default FooterBanner
