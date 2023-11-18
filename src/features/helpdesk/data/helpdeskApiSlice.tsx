import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const helpdeskApiSlice = createApi({
  reducerPath: "helpdesk",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  endpoints: (builder) => ({
    getHelpdesk: builder.query({
      query: () => "/helpdesk",
    }),
  }),
});

export const { useGetHelpdeskQuery } = helpdeskApiSlice;
