import type IUser from "../../interfaces/user";
import { logOutUser } from "../../utils";
import api from "./index";

const userApi = api.injectEndpoints({
	endpoints: (builder) => ({
		profile: builder.query<IUser, void>({
			query: () => ({ url: "/user/", method: "GET" }),
			keepUnusedDataFor: 1200,
			providesTags: (result, error) => {
				if (error?.status === 401) {
					console.log({ error });
					logOutUser();
				}
				console.log({ result, error });
				return result ? [{ type: "PROFILE" }] : error?.status === 401 ? ["UNAUTHORIZED"] : ["UNKNOWN_ERROR"];
			},
		}),
	}),
	overrideExisting: true,
});

export const { useProfileQuery, useLazyProfileQuery } = userApi;

export default userApi;
