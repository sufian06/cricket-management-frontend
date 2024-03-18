import { baseApi } from "./baseApi";

const AUTH_UTL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_UTL}/login`,
        method: "POST",
        data: loginData,
      }),

      invalidatesTags: ["user"],
    }),
  }),
});

export const { useUserLoginMutation } = authApi;
