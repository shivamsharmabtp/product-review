import { configureStore } from "@reduxjs/toolkit";
import productDetailsSlice from "./productDetailsSlice";

const store = configureStore({
  reducer: {
    productDetailsData: productDetailsSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
