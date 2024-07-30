import { configureStore } from "@reduxjs/toolkit";
import api from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
	reducer: { api: api.reducer },
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
