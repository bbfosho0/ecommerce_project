import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => (
  <div className="home-page">
    <HeroBanner heroBanner={bannerData?.[0]} />

    <section className="products-section" id="products" aria-labelledby="featured-products-heading">
      <div className="products-heading">
        <p className="section-eyebrow">Featured listening</p>
        <h2 id="featured-products-heading">Best Selling Products</h2>
        <p>Live Sanity products, selected for high-fidelity everyday listening.</p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
    </section>

    <section id="shipping" aria-label="Shipping and featured offer">
      <FooterBanner footerBanner={bannerData?.[0]} />
    </section>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;
