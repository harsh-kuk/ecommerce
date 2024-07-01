// src/pages/ProductDetail.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../slices/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.items.find(p => p.id === parseInt(id)));

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <img src={product.image} alt={product.name} className="w-1/2 h-64 object-cover mr-4" />
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="mb-2">${product.price}</p>
          <p className="mb-4">{product.description}</p>
          <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
