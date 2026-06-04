import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/image';

const HeroBanner = ({ heroBanner }) => {
  if (!heroBanner) return null;

  return (
    <div className="hero-banner-container">
      <div className="hero-copy">
        <p className="beats-solo">Summer signal / {heroBanner.smallText}</p>
        <h1>{heroBanner.midText}</h1>
        <p className="hero-summary">{heroBanner.desc}</p>

        <div className="hero-actions">
          <Link href={`/product/${heroBanner.product}`}>
            <a className="button-primary">{heroBanner.buttonText}</a>
          </Link>
          <a className="button-secondary" href="#products">Explore products</a>
        </div>
      </div>

      <div className="hero-media" aria-hidden="true">
        <p>{heroBanner.largeText1}</p>
        <img src={urlFor(heroBanner.image)} alt="" className="hero-banner-image" />
      </div>
    </div>
  )
}

export default HeroBanner
