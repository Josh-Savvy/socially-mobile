import { logOutUser } from "../../utils";
import api from "./index";

const userApi = api.injectEndpoints({
	endpoints: (builder) => ({
		profile: builder.query({
			query: () => "/users",
			keepUnusedDataFor: 1200,
			providesTags: (result, error) => {
				if (error?.status === 401) {
					console.log({ error });
					logOutUser();
				}
				return result ? [{ type: "PROFILE" }] : error?.status === 401 ? ["UNAUTHORIZED"] : ["UNKNOWN_ERROR"];
			},
		}),
	}),
});

export const { useProfileQuery, useLazyProfileQuery } = userApi;

export default userApi;
