// src/slices/productSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: null,
  },
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;

export const fetchProducts = () => async dispatch => {
  dispatch(setStatus('loading'));
  try {
    const response = await axios.get('/api/products');
    dispatch(setProducts(response.data));
    dispatch(setStatus('success'));
  } catch (error) {
    dispatch(setStatus('failed'));
  }
};

export default productSlice.reducer;
