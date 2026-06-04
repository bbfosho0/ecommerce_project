import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className='navbar-container'>
      <Link href="/">
        <a className='brand-link' aria-label='Audiophile Haven home'>
          <span className='brand-mark' aria-hidden='true'>AH</span>
          <span className='logo'>Audiophile Haven</span>
        </a>
      </Link>

      <nav className='nav-links' aria-label='Primary navigation'>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/#products">
          <a>Products</a>
        </Link>
        <Link href="/#shipping">
          <a>Shipping</a>
        </Link>
      </nav>

      <button
        type='button'
        className='cart-icon'
        aria-label={`Open cart with ${totalQuantities} items`}
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping aria-hidden='true' />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar
