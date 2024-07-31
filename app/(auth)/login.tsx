import { View, StyleSheet } from "react-native";
import React from "react";
import ViewContainer from "../../components/ui/layout/view-container";
import LoginForm from "../../components/organisms/auth/login-form";
import { Colors } from "../../constants/Colors";
import { BackButton } from "../../components/ui/buttons";

const LoginScreen = () => {
	return (
		<ViewContainer
			showHeader
			showBackBtn
			style={{ paddingHorizontal: 0 }}
			headerTitle="Sign In"
			headerProps={{
				leftButton: <BackButton />,
			}}>
			<View style={{ flex: 1, alignItems: "center", marginVertical: 30 }}>
				<LoginForm />
			</View>
		</ViewContainer>
	);
};

export default LoginScreen;
