import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/image';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <article className="product-shell">
      <Link href={`/product/${slug.current}`}>
        <a className='product-card' aria-label={`View ${name}`}>
          <span className="product-image-frame">
            <img
              src={urlFor(image && image[0])}
              width={250}
              height={250}
              alt={name}
              className="product-image"
            />
          </span>
          <span className="product-meta">
            <span>
              <span className='product-name'>{name}</span>
              <span className='product-note'>Sanity product</span>
            </span>
            <span className='product-price'>${price}</span>
          </span>
          <span className="product-link">View product</span>
        </a>
      </Link>
    </article>
  )
}

export default Product
