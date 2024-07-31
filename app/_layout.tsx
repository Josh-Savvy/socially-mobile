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
import { SafeAreaProvider } from "react-native-safe-area-context";

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
		<SafeAreaProvider>
			<Provider store={store}>
				<StatusBar barStyle={!dark ? "light-content" : "dark-content"} />
				<Stack screenOptions={{ headerShown: false, animation: "fade" }} initialRouteName="(tabs)">
					<Stack.Screen name="(tabs)" />
					<Stack.Screen name="+not-found" />
					<Stack.Screen
						name="view-image/index"
						options={{ animation: "fade", gestureDirection: "vertical" }}
					/>
					<Stack.Screen
						name="story/[id]"
						options={{ animation: "fade_from_bottom", gestureDirection: "vertical" }}
					/>
					<Stack.Screen
						name="post/[id]"
						options={{ animation: "slide_from_bottom", gestureDirection: "vertical" }}
					/>
				</Stack>
			</Provider>
		</SafeAreaProvider>
	);
}
