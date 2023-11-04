import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const notificationsApiSlice = createApi({
  reducerPath: "notifications",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: () => "/notification",
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationsApiSlice;
