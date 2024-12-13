import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./productSlice";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export default store;