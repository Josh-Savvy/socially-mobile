import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ViewContainer from "../../../components/ui/layout/view-container";

type Props = {};

const ProfileScreen = (props: Props) => {
	return (
		<ViewContainer>
			<View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
				<Text>ProfileScreen</Text>
			</View>
		</ViewContainer>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({});
