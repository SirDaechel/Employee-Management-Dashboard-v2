import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jsonserve.com" }),
  endpoints: (builder) => ({
    getStaffs: builder.query({
      query: () => "/6QWq0x",
    }),
  }),
});

export const { useGetStaffsQuery } = apiSlice;
