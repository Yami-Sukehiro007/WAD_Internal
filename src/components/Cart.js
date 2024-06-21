// Cart.js
import React, { useState } from 'react';
import './style.css';
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

 
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };


  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Add something :)</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> - ${item.price}{' '}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
