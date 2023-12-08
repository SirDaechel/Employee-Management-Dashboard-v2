import { configureStore } from "@reduxjs/toolkit";
import StaffsPerPageReducer from "./StaffsPerPageSlice";
import staffsReducer from "../features/staffs/data/staffsApiSlice";
import projectsReducer from "../features/projects/data/projectsApiSlice";

export const store = configureStore({
  reducer: {
    StaffsPerPage: StaffsPerPageReducer,
    staffsData: staffsReducer,
    projectsData: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
