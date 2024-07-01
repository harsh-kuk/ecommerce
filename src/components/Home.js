// src/pages/Home.js
import React from 'react';
import { useSelector } from 'react-redux';
import ProductListing from '../components/ProductListing';

const Home = () => {
  const products = useSelector(state => state.products.items);
  const status = useSelector(state => state.products.status);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Failed to load products</div>;

  return (
    <div className="container mx-auto p-4">
      <ProductListing products={products} />
    </div>
  );
};

export default Home;
