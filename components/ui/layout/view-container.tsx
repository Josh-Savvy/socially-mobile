import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../../constants/Colors";

type Props = { style?: StyleProp<ViewStyle>; children?: ReactNode };

const ViewContainer = ({ style, children, ...props }: Props) => {
	return <SafeAreaView style={[style, styles.container]}>{children}</SafeAreaView>;
};

export default ViewContainer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.dark_black,
		color: Colors.white,
		paddingHorizontal: 15,
		paddingTop: 10,
	},
});
