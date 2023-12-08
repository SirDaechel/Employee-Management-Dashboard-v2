import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store/Store";
import { staffs } from "./staffs";

const initialState = {
  staffs: staffs,
};

const staffsSlice = createSlice({
  name: "staffs",
  initialState,
  reducers: {
    toggleChecked: (state, action) => {
      const staff = state.staffs.filter(
        (staff) => staff.id === action.payload.id
      );
      staff[0].checked = action.payload.checked;
    },
    checkAll: (state, action) => {
      const allStaffs = state.staffs.map((staff) => ({
        ...staff,
        checked: action.payload,
      }));
      return { staffs: allStaffs };
    },
  },
});

export const staffsState = (state: RootState) => state.staffsData;

export const { toggleChecked, checkAll } = staffsSlice.actions;

export default staffsSlice.reducer;

// toggleChecked: (state, action) => {
//   const index = state.staffs.findIndex(
//     (staff) => staff.id === action.payload.id
//   );
//   state.staffs[index].checked = action.payload.checked;
// },
