import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  archivedStaffs: [],
  binStaffs: [],
};

const StaffsSlice = createSlice({
  name: "modified staffs",
  initialState,
  reducers: {
    deleteStaff(state, action) {
      state.binStaffs = action.payload;
    },
    restoreDeletedStaff(state, action) {
      state.binStaffs = action.payload;
    },
  },
});

export const { deleteStaff, restoreDeletedStaff } = StaffsSlice.actions;

export default StaffsSlice.reducer;
