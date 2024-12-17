import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import bookReducer from "./features/book/bookApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    book: bookReducer,
  },
});
