import { configureStore } from "@reduxjs/toolkit";
import staffsReducer from "../reducers/staffsSlice";

export const store = configureStore({
  reducer: {
    staffs: staffsReducer,
  },
});
