import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cart from "./features/cart";

const reducer = combineReducers({
  cart,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
