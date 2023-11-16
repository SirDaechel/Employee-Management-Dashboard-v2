import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  staffsPerPage: 10,
  archivedStaffsPerPage: 10,
  deletedStaffsPerPage: 10,
};

const StaffsPerPageSlice = createSlice({
  name: "staffs",
  initialState,
  reducers: {
    setStaffsPerPage: (state, action) => {
      state.staffsPerPage = action.payload;
    },
    setArchivedStaffsPerPage: (state, action) => {
      state.archivedStaffsPerPage = action.payload;
    },
    setDeletedStaffsPerPage: (state, action) => {
      state.deletedStaffsPerPage = action.payload;
    },
  },
});

export const {
  setStaffsPerPage,
  setArchivedStaffsPerPage,
  setDeletedStaffsPerPage,
} = StaffsPerPageSlice.actions;

export default StaffsPerPageSlice.reducer;
