import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./Store";

const initialState = {
  staffsPerPage: 10,
};

const staffsPerPageSlice = createSlice({
  name: "staffsperpage",
  initialState,
  reducers: {
    modifyPageSize: (state, action) => {
      state.staffsPerPage = action.payload;
    },
  },
});

export const selectStaffPageSize = (state: RootState) => state.StaffsPerPage;

export const { modifyPageSize } = staffsPerPageSlice.actions;

export default staffsPerPageSlice.reducer;
