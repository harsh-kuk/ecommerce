// src/components/ProductListing.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductListing = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
          <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          <p className="mb-2">${product.price}</p>
          <Link to={`/product/${product.id}`} className="bg-blue-500 text-white px-4 py-2">View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
