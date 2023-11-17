import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApiSlice = createApi({
  reducerPath: "projects",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sirdaechel.github.io/jsonapi-/",
  }),
  tagTypes: ["Projects"],
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "projects.json",
      transformResponse: (res: any) => res.slice(0, 6),
      providesTags: ["Projects"],
    }),
  }),
});

export const { useGetProjectsQuery } = projectsApiSlice;
