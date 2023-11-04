import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const staffsApiSlice = createApi({
  reducerPath: "staffs",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  endpoints: (builder) => ({
    getStaffs: builder.query({
      query: () => "/staffs",
    }),
  }),
});

export const { useGetStaffsQuery } = staffsApiSlice;
