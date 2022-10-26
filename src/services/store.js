import { configureStore } from "@reduxjs/toolkit";
import {questionApi } from "./Test";

export const store = configureStore({
  reducer: {
    [questionApi.reducerPath]:questionApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questionApi.middleware)
});