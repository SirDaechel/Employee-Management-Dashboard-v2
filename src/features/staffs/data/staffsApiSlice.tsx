import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store/Store";
import { staffs } from "./staffs";

type SliceType = {
  staffs: any[];
  archivedStaffs: any[];
  currentStaffs: any[];
  deletedStaffs: any[];
};

const initialState: SliceType = {
  staffs: staffs,
  archivedStaffs: [],
  currentStaffs: [],
  deletedStaffs: [],
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
    checkAllStaffs: (state, action) => {
      const allStaffs = state.staffs.map((staff) => ({
        ...staff,
        checked: action.payload,
      }));
      return {
        ...state,
        staffs: allStaffs,
      };
    },
    checkAllArchivedStaffs: (state, action) => {
      const allStaffs = state.archivedStaffs.map((staff) => ({
        ...staff,
        checked: action.payload,
      }));
      return {
        ...state,
        archivedStaffs: allStaffs,
      };
    },
    checkAllDeletedStaffs: (state, action) => {
      const allStaffs = state.deletedStaffs.map((staff) => ({
        ...staff,
        checked: action.payload,
      }));
      return {
        ...state,
        deletedStaffs: allStaffs,
      };
    },
    setCurrentStaffs: (state, action) => {
      return { ...state, currentStaffs: action.payload };
    },
    setArchivedStaffs: (state, action) => {
      return { ...state, archivedStaffs: action.payload };
    },
    setDeletedStaffs: (state, action) => {
      return { ...state, deletedStaffs: action.payload };
    },
    setStaffs: (state, action) => {
      return { ...state, staffs: action.payload };
    },
  },
});

export const staffsState = (state: RootState) => state.staffsData;

export const {
  toggleChecked,
  checkAllStaffs,
  checkAllArchivedStaffs,
  checkAllDeletedStaffs,
  setCurrentStaffs,
  setArchivedStaffs,
  setDeletedStaffs,
  setStaffs,
} = staffsSlice.actions;

export default staffsSlice.reducer;
