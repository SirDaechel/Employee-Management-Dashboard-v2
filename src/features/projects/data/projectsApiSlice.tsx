import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store/Store";
import { projects } from "./projects";

type SliceType = {
  projects: any[];
};

const initialState: SliceType = {
  projects: projects.reverse(),
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      return { ...state, projects: action.payload };
    },
  },
});

export const projectsState = (state: RootState) => state.projectsData;

export const { setProjects } = projectSlice.actions;

export default projectSlice.reducer;
