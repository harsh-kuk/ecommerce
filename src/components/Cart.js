
// src/pages/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="mb-2 flex justify-between items-center">
            <div>{item.name} - ${item.price} x {item.quantity}</div>
            <button onClick={() => handleRemoveFromCart(item.id)} className="bg-red-500 text-white px-4 py-2">Remove</button>
          </li>
        ))}
      </ul>
      <p className="mt-4">Total: ${total}</p>
    </div>
  );
};

export default Cart;
