import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store/Store";
import { notifications } from "./notifications";

type SliceType = {
  notifications: any[];
};

const initialState: SliceType = {
  notifications: notifications,
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      return { ...state, notifications: action.payload };
    },
  },
});

export const notificationsState = (state: RootState) => state.notificationsData;

export const { setNotifications } = notificationsSlice.actions;

export default notificationsSlice.reducer;
