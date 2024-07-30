import store from "../redux/store";
import { Stack } from "expo-router";
import React from "react";
import { Provider } from "react-redux";

export default function Layout() {
	return (
		<Provider store={store}>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="index" />
				<Stack.Screen name="profile/index" />
			</Stack>
		</Provider>
	);
}
