
// src/pages/Checkout.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../slices/cartSlice';
import axios from 'axios';

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    try {
      const response = await axios.post('/api/checkout', { cart });
      if (response.data.success) {
        dispatch(clearCart());
        alert('Checkout successful');
      } else {
        alert('Checkout failed');
      }
    } catch (error) {
      alert('Error processing checkout');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="mb-2">
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p className="mt-4">Total: ${total}</p>
      <button onClick={handleCheckout} className="bg-green-500 text-white px-4 py-2 mt-4">Proceed to Payment</button>
    </div>
  );
};

export default Checkout;
