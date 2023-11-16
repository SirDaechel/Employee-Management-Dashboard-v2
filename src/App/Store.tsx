import { configureStore } from "@reduxjs/toolkit";
import { staffsApiSlice } from "../api/staffsApiSlice";
import { projectsApiSlice } from "../api/projectsApiSlice";
import { notificationsApiSlice } from "../api/notificationsApiSlice";
import { helpdeskApiSlice } from "../api/helpdeskApiSlice";
import StaffsPerPageReducer from "./Features/DataPerPage/StaffsPerPageSlice";

export const store = configureStore({
  reducer: {
    [staffsApiSlice.reducerPath]: staffsApiSlice.reducer,
    [projectsApiSlice.reducerPath]: projectsApiSlice.reducer,
    [notificationsApiSlice.reducerPath]: notificationsApiSlice.reducer,
    [helpdeskApiSlice.reducerPath]: helpdeskApiSlice.reducer,
    staffsPerPage: StaffsPerPageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      staffsApiSlice.middleware,
      projectsApiSlice.middleware,
      notificationsApiSlice.middleware,
      helpdeskApiSlice.middleware
    ),
});
