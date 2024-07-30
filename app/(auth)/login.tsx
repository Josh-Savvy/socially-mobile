import { View, Text } from "react-native";
import React from "react";
import ViewContainer from "../../components/ui/layout/view-container";

const LoginScreen = () => {
	return (
		<ViewContainer>
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text>LoginScreen</Text>
			</View>
		</ViewContainer>
	);
};

export default LoginScreen;
