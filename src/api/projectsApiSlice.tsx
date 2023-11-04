import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApiSlice = createApi({
  reducerPath: "projects",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  tagTypes: ["Projects"],
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/projects",
      transformResponse: (res: any) => res.slice(0, 6),
      providesTags: ["Projects"],
    }),
  }),
});

export const { useGetProjectsQuery } = projectsApiSlice;
