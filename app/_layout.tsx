import store from "../redux/store";
import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import userApi from "../redux/api/user";
import { StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
	useFonts,
	HankenGrotesk_100Thin,
	HankenGrotesk_200ExtraLight,
	HankenGrotesk_300Light,
	HankenGrotesk_400Regular,
	HankenGrotesk_500Medium,
	HankenGrotesk_600SemiBold,
	HankenGrotesk_700Bold,
	HankenGrotesk_800ExtraBold,
	HankenGrotesk_900Black,
	HankenGrotesk_100Thin_Italic,
	HankenGrotesk_200ExtraLight_Italic,
	HankenGrotesk_300Light_Italic,
	HankenGrotesk_400Regular_Italic,
	HankenGrotesk_500Medium_Italic,
	HankenGrotesk_600SemiBold_Italic,
	HankenGrotesk_700Bold_Italic,
	HankenGrotesk_800ExtraBold_Italic,
	HankenGrotesk_900Black_Italic,
} from "@expo-google-fonts/hanken-grotesk";

// store.dispatch(userApi.endpoints.profile.initiate());

SplashScreen.preventAutoHideAsync();

export default function Layout() {
	const { dark } = useTheme();
	const [fontsLoaded, error] = useFonts({
		HankenGrotesk_100Thin,
		HankenGrotesk_200ExtraLight,
		HankenGrotesk_300Light,
		HankenGrotesk_400Regular,
		HankenGrotesk_500Medium,
		HankenGrotesk_600SemiBold,
		HankenGrotesk_700Bold,
		HankenGrotesk_800ExtraBold,
		HankenGrotesk_900Black,
		HankenGrotesk_100Thin_Italic,
		HankenGrotesk_200ExtraLight_Italic,
		HankenGrotesk_300Light_Italic,
		HankenGrotesk_400Regular_Italic,
		HankenGrotesk_500Medium_Italic,
		HankenGrotesk_600SemiBold_Italic,
		HankenGrotesk_700Bold_Italic,
		HankenGrotesk_800ExtraBold_Italic,
		HankenGrotesk_900Black_Italic,
	});

	useEffect(() => {
		if (fontsLoaded || error) SplashScreen.hideAsync();
	}, [fontsLoaded, error]);
	if (!fontsLoaded) return null;

	return (
		<Provider store={store}>
			<StatusBar barStyle={!dark ? "light-content" : "dark-content"} />
			<Stack screenOptions={{ headerShown: false }} initialRouteName="index">
				<Stack.Screen name="[not-found]" />
				<Stack.Screen name="index" />
				<Stack.Screen name="profile/index" />
				<Stack.Screen name="(auth)/login" />
				<Stack.Screen name="(auth)/signup" />
			</Stack>
		</Provider>
	);
}
