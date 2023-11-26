import { configureStore } from "@reduxjs/toolkit";
import { staffsApiSlice } from "../features/staffs/data/staffsApiSlice";
import { projectsApiSlice } from "../features/projects/data/projectsApiSlice";
import { notificationsApiSlice } from "../features/notifications/data/notificationsApiSlice";
import { helpdeskApiSlice } from "../features/helpdesk/data/helpdeskApiSlice";
import StaffsPerPageReducer from "./StaffsPerPageSlice";

export const store = configureStore({
  reducer: {
    [staffsApiSlice.reducerPath]: staffsApiSlice.reducer,
    [projectsApiSlice.reducerPath]: projectsApiSlice.reducer,
    [notificationsApiSlice.reducerPath]: notificationsApiSlice.reducer,
    [helpdeskApiSlice.reducerPath]: helpdeskApiSlice.reducer,
    StaffsPerPage: StaffsPerPageReducer,
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
