import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const notificationsApiSlice = createApi({
  reducerPath: "notifications",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jsonserve.com" }),
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: () => "/OakYPP",
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationsApiSlice;
