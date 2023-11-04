import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApiSlice = createApi({
  reducerPath: "projects",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jsonserve.com" }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/vquMFc",
    }),
  }),
});

export const { useGetProjectsQuery } = projectsApiSlice;
