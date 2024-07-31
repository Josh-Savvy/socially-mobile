import {
	ActivityIndicator,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../../../constants/Colors";
import { Input } from "../../ui/text-inputs";
import { FilledButton } from "../../ui/buttons";
import Fonts from "../../../constants/Fonts";
import SeparatorWithText from "../../ui/common/separator";
import { router } from "expo-router";
import { EyeOpenIcon, EyeCloseIcon } from "../../svgs";

const LoginForm = () => {
	const isLoading = false;
	const [showPassword, setShowPassword] = useState(false);
	// Todo: check if user has signed in before and display interface as returning user
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}>
			<Input placeholder="Email address" keyboardType="email-address" inputMode="email" autoCapitalize="none" />
			<Input
				placeholder="Password"
				secureTextEntry={!showPassword}
				rightIcon={
					<TouchableOpacity onPress={() => setShowPassword((p) => !p)}>
						{!showPassword ? <EyeOpenIcon color="#000" /> : <EyeCloseIcon />}
					</TouchableOpacity>
				}
			/>
			<FilledButton
				title={!isLoading ? "Continue" : <ActivityIndicator color={"#fff"} />}
				background={Colors.black}
				titleProps={{ style: { color: "#fff" } }}
				style={{ marginBottom: 25, marginTop: 10 }}
			/>
			<Text
				onPress={() => router.replace("/(auth)/signup")}
				style={{
					fontFamily: Fonts.HankenGrotesk_600SemiBold,
					color: "#fff",
					textAlign: "center",
					marginVertical: 5,
					marginBottom: 20,
					fontSize: 18,
				}}>
				Create an account
			</Text>
			<SeparatorWithText text="Or" />
			<Text>SSO options here</Text>
		</KeyboardAvoidingView>
	);
};

export default LoginForm;

const styles = StyleSheet.create({
	container: { height: "80%", width: "90%", overflow: "hidden", padding: 10 },
});
