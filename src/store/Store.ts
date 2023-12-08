import { configureStore } from "@reduxjs/toolkit";
import StaffsPerPageReducer from "./StaffsPerPageSlice";
import staffsReducer from "../features/staffs/data/staffsApiSlice";
import projectsReducer from "../features/projects/data/projectsApiSlice";
import helpdeskReducer from "../features/helpdesk/data/helpdeskApiSlice";

export const store = configureStore({
  reducer: {
    StaffsPerPage: StaffsPerPageReducer,
    staffsData: staffsReducer,
    projectsData: projectsReducer,
    helpdeskData: helpdeskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
