import api from "./index";

const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (body) => ({
				url: "/auth/sigin",
				method: "POST",
				body,
			}),
			invalidatesTags: ["PROFILE"],
		}),
	}),
});

export const { useLoginMutation } = authApi;
