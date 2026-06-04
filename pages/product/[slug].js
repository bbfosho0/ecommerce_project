import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client } from '../../lib/client';
import { urlFor } from '../../lib/image';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <section className="product-gallery" aria-label={`${name} product images`}>
          <div className="image-container">
            <img src={urlFor(image && image[index])} alt={name} className="product-detail-image" />
          </div>
          <div className="small-images-container" aria-label="Select product image">
            {image?.map((item, i) => (
              <button
                type="button"
                key={i}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                aria-label={`Show ${name} image ${i + 1}`}
                aria-pressed={i === index}
                onClick={() => setIndex(i)}
                onMouseEnter={() => setIndex(i)}
              >
                <img src={urlFor(item)} alt="" />
              </button>
            ))}
          </div>
        </section>

        <section className="product-detail-desc" aria-labelledby="product-title">
          <p className="product-route-label">Signature audio</p>
          <h1 id="product-title">{name}</h1>
          <p className="price">${price}</p>
          <div className="reviews" aria-label="Rated 4 out of 5 stars">
            <div aria-hidden="true">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <div className="quantity">
            <h3 id="product-quantity-label">Quantity</h3>
            <div className="quantity-desc" aria-labelledby="product-quantity-label">
              <button type="button" className="minus" aria-label="Decrease quantity" onClick={decQty}>
                <AiOutlineMinus aria-hidden="true" />
              </button>
              <span className="num" aria-live="polite">{qty}</span>
              <button type="button" className="plus" aria-label="Increase quantity" onClick={incQty}>
                <AiOutlinePlus aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
          </div>
        </section>
      </div>

      <section className="maylike-products-wrapper" aria-labelledby="related-products-heading">
          <p className="section-eyebrow">More to audition</p>
          <h2 id="related-products-heading">You may also like</h2>
          <div className="related-products-grid">
            {products.slice(0, 4).map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
      </section>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);


  return {
    props: { products, product }
  }
}

export default ProductDetails
