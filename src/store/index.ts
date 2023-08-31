import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./task-items-slice";

const store = configureStore({
  reducer: {
    items: itemsSlice,
  },
});

export default store;
