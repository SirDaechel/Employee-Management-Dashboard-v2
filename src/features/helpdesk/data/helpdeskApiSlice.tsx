import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store/Store";
import { tickets } from "./tickets";

const initialState = {
  tickets: tickets,
};

const helpdeskSlice = createSlice({
  name: "helpdesk",
  initialState,
  reducers: {
    setTickets: (state, action) => {
      return { ...state, tickets: action.payload };
    },
  },
});

export const helpdeskState = (state: RootState) => state.helpdeskData;

export const { setTickets } = helpdeskSlice.actions;

export default helpdeskSlice.reducer;
