import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const staffsApiSlice = createApi({
  reducerPath: "staffs",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sirdaechel.github.io/jsonapi-/",
  }),
  tagTypes: ["Staffs"],
  endpoints: (builder) => ({
    getStaffs: builder.query({
      query: () => "staffs.json",
      providesTags: ["Staffs"],
    }),
  }),
});

export const { useGetStaffsQuery } = staffsApiSlice;
