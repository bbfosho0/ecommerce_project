import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, [setCartItems, setTotalPrice, setTotalQuantities]);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon" aria-hidden="true">
          <BsBagCheckFill aria-hidden="true" />
        </p>
        <h1>Payment successful.</h1>
        <p className="email-msg">Thank you for your order. Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:americanyosh@gmail.com">
            americanyosh@gmail.com
          </a>
        </p>
        <Link href="/">
          <a className="btn">
            Continue Shopping
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Success
