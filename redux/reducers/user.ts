import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type IUser from "../../interfaces/user";
import userApi from "../api/user";
import { RootState } from "../store";

const initialState: IUser | null = null as IUser | null;

const userSlice = createSlice({
	name: "user-reducer",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addMatcher(
			userApi.endpoints.profile.matchFulfilled,
			(state: IUser | null, { payload }: PayloadAction<IUser>) => {
				console.log({ payload });
				if (state) state = { ...state, ...payload };
				else state = payload;
			},
		);
	},
});

export const {} = userSlice.actions;

export const currentUser = (state: RootState) => state.user;

export default userSlice.reducer;
