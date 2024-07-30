import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../../constants/Colors";

type Props = { style?: StyleProp<ViewStyle>; children?: ReactNode };

const ViewContainer = ({ style, children, ...props }: Props) => {
	return (
		<View style={[styles.container, style]} {...props}>
			{children}
		</View>
	);
};

export default ViewContainer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
		backgroundColor: Colors.dark_black,
		color: Colors.white,
		paddingHorizontal: 15,
		paddingTop: 50,
	},
});
