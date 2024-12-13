import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: []
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const { id, updatedData } = action.payload;
      const product = state.products.find(product => product.id === id);
      if (product) {
        Object.assign(product, updatedData);
      }
    },
    toggleAvailability: (state, action) => {
      const product = state.products.find(product => product.id === action.payload);
      if (product) {
        product.available = !product.available;
      }
    }
  }
});

export const { addProduct, removeProduct, updateProduct, toggleAvailability } = productsSlice.actions;

