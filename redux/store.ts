import { configureStore } from "@reduxjs/toolkit";
import api from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "./reducers/user";
import postsReducer from "./reducers/post";

const store = configureStore({
	reducer: {
		user: userReducer,
		posts: postsReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
