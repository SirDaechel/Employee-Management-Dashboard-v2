import { configureStore } from "@reduxjs/toolkit";
import { staffsApiSlice } from "../data/staffsApiSlice";
import { projectsApiSlice } from "../data/projectsApiSlice";
import { notificationsApiSlice } from "../data/notificationsApiSlice";
import { helpdeskApiSlice } from "../data/helpdeskApiSlice";
// import StaffsPerPageReducer from "../src/App/Features/DataPerPage/StaffsPerPageSlice";

export const store = configureStore({
  reducer: {
    [staffsApiSlice.reducerPath]: staffsApiSlice.reducer,
    [projectsApiSlice.reducerPath]: projectsApiSlice.reducer,
    [notificationsApiSlice.reducerPath]: notificationsApiSlice.reducer,
    [helpdeskApiSlice.reducerPath]: helpdeskApiSlice.reducer,
    // staffsPerPage: StaffsPerPageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      staffsApiSlice.middleware,
      projectsApiSlice.middleware,
      notificationsApiSlice.middleware,
      helpdeskApiSlice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
