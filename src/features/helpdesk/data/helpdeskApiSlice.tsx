import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store/Store";
import { tickets } from "./tickets";

const initialState = {
  tickets: tickets,
};

const helpdeskSlice = createSlice({
  name: "helpdesk",
  initialState,
  reducers: {},
});

export const helpdeskState = (state: RootState) => state.helpdeskData;

export const {} = helpdeskSlice.actions;

export default helpdeskSlice.reducer;
