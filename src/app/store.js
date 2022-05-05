import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer
  },
});

export default store;