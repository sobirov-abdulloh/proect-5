import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),

  endpoints: (builder) => ({
    questions: builder.query({
      query: () => "/questions",
      providesTags: ["question"],
    }),
    addQuestion: builder.mutation({
      query: (question) => ({
        url: "/questions",
        method: "POST",
        body: question,
      }),
      invalidatesTags: ["question"],
    }),
    updateQuestion: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/questions/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["question"],
    }),
    deleteQuestion: builder.mutation({
      query: (id) => ({
        url: `/questions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["question"],
    }),
  }),
});

export const {
  useQuestionsQuery,
  useAddQuestionMutation,
  useUpdateQuestionMutation,
  useDeleteQuestionMutation,
} = questionApi;
