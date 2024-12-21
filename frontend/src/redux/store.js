import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import bookReducer from "./features/book/bookApi";
import orderApi from "./features/order/orderApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    book: bookReducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(orderApi.middleware),
});
