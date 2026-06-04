import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping, AiOutlineClose } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setShowCart(false);
      }
    };

    document.addEventListener('keydown', closeOnEscape);

    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [setShowCart]);

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if (response.status === 500) {
      setIsCheckingOut(false);
      return;
    }

    const data = await response.json();
    toast.loading('Redirecting...');
    stripe.redirectToCheckout({sessionId: data.id});
  }

  return (
    <div className='cart-wrapper' ref={cartRef} onClick={() => setShowCart(false)}>
      <div
        className='cart-container'
        role='dialog'
        aria-modal='true'
        aria-labelledby='cart-title'
        onClick={(event) => event.stopPropagation()}
      >
        <button type='button' className='cart-heading' onClick={() => setShowCart(false)}>
          <span className='heading' id='cart-title'>Your cart</span>
          <span className='cart-num-items'>({totalQuantities} items)</span>
          <AiOutlineClose aria-hidden='true' />
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={44} aria-hidden='true' />
            <h3>Cart is empty</h3>
            <p>Products appear here after Sanity items are added.</p>
            <Link href="/">
              <button type='button' onClick={() => setShowCart(false)} className="btn" >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className='product' key={item._id}>
              <img src={urlFor(item?.image[0])} alt={item.name} className="cart-product-image"/>
              <div className='item-desc'>
                <div className='flex top'>
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <div className='flex bottom'>
                  <div>
                    <div className='quantity-desc' aria-label={`Quantity for ${item.name}`}>
                        <button type='button' className='minus' aria-label={`Decrease ${item.name} quantity`} onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                            <AiOutlineMinus aria-hidden='true' />
                        </button>
                        <span className='num' >{item.quantity}</span>
                        <button type='button' className='plus' aria-label={`Increase ${item.name} quantity`} onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
                          <AiOutlinePlus aria-hidden='true' />
                        </button>
                    </div>
                  </div>
                  <button type='button' className='remove-item' aria-label={`Remove ${item.name}`} onClick={() => onRemove(item)}>
                    <TiDeleteOutline aria-hidden='true' />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className='cart-bottom'>
            <div className='total'>
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className='btn-container'>
              <button type='button' className='btn' onClick={handleCheckout} disabled={isCheckingOut}>
                {isCheckingOut ? 'Redirecting...' : 'Pay with Stripe'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
