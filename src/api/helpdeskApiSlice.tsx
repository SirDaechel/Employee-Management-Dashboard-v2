import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const helpdeskApiSlice = createApi({
  reducerPath: "helpdesk",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jsonserve.com" }),
  endpoints: (builder) => ({
    getHelpdesk: builder.query({
      query: () => "/jqK37a",
    }),
  }),
});

export const { useGetHelpdeskQuery } = helpdeskApiSlice;
