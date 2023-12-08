import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store/Store";
import { projects } from "./projects";

const initialState = {
  projects: projects,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export const projectsState = (state: RootState) => state.projectsData;

export const {} = projectSlice.actions;

export default projectSlice.reducer;
