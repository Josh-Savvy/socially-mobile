import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../../config";
import { getToken } from "../../utils";

const tagTypes = ["PROFILE", "POSTS", "STORIES", "UNAUTHORIZED", "UNKNOWN_ERROR"];
const baseUrl = config.baseUrl;

export default createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl,
		prepareHeaders: async (headers, { getState, endpoint }) => {
			const token = await getToken();
			console.log({ token });
			if (token) headers.set("Authorization", `Bearer ${token}`);
			headers.set("Accept", `*/*`);
			headers.set("Connection", `keep-alive`);
			return headers;
		},
	}),
	tagTypes,
	endpoints: (builder) => ({}),
});
