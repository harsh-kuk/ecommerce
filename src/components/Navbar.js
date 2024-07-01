// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">E-Commerce</Link>
        <div>
          <Link to="/cart" className="text-white mr-4">Cart</Link>
          <Link to="/checkout" className="text-white">Checkout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
