import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store/Store";
import { staffs } from "./staffs";

type SliceType = {
  staffs: any[];
  archivedStaffs: any[];
  currentStaffs: any[];
  deletedStaffs: any[];
  staffToBeEdited: any;
};

const initialState: SliceType = {
  staffs: staffs.reverse(),
  archivedStaffs: [],
  currentStaffs: [],
  deletedStaffs: [],
  staffToBeEdited: {},
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
    addEditStaff: (state, action) => {
      return { ...state, staffToBeEdited: action.payload };
    },
    editThisStaff: (state, action) => {
      const {
        id,
        name,
        firstname,
        lastname,
        email,
        role,
        wage,
        age,
        phone,
        workinghours,
      } = action.payload;

      // get the particular staff being edited
      const staff = state.staffs.find((staff) => staff.id === id);

      // set the staff to the edits
      staff.name = name;
      staff.firstname = firstname;
      staff.lastname = lastname;
      staff.email = email;
      staff.role = role;
      staff.wage = wage;
      staff.age = age;
      staff.phone = phone;
      staff.workinghours = workinghours;
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
  addEditStaff,
  editThisStaff,
} = staffsSlice.actions;

export default staffsSlice.reducer;
