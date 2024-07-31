import { type StyleProp, StyleSheet, Text, type TextStyle, View, type ViewStyle } from "react-native";
import React, { type ReactNode } from "react";
import { Colors } from "../../../constants/Colors";
import Fonts from "../../../constants/Fonts";

interface Props {
	style?: StyleProp<ViewStyle>;
	children?: ReactNode;
	showHeader?: boolean;
	showBackBtn?: boolean;
	headerTitle?: string;
	headerProps?: Omit<HeaderProps, "title">;
}

interface HeaderProps {
	title: string;
	leftButton?: React.ReactNode;
	rightButton?: React.ReactNode;
	containerStyle?: ViewStyle;
	titleStyle?: TextStyle;
	leftButtonPress?: () => void;
	rightButtonPress?: () => void;
}

const ViewContainer = ({ style, children, showHeader, showBackBtn, headerTitle, headerProps, ...props }: Props) => {
	return (
		<View style={[styles.container, style]} {...props}>
			{showHeader && (
				<ScreenHeader
					{...headerProps}
					title={headerTitle || "My App"}
					containerStyle={headerProps?.containerStyle}
					titleStyle={{
						...styles.title,
						...headerProps?.titleStyle,
					}}
				/>
			)}
			{children}
		</View>
	);
};

export const ScreenHeader: React.FC<HeaderProps> = ({ title, leftButton, rightButton, containerStyle, titleStyle }) => {
	return (
		<View style={[styles.header_container, containerStyle]}>
			{leftButton && <View style={styles.leftButton}>{leftButton}</View>}
			<Text style={[styles.title, titleStyle]}>{title}</Text>
			{rightButton && <View style={styles.rightButton}>{rightButton}</View>}
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
	header_container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		height: 60,
		marginHorizontal: 20,
	},
	leftButton: {
		position: "absolute",
		left: 0,
		height: "100%",
		justifyContent: "center",
	},
	rightButton: {
		position: "absolute",
		right: 0,
		height: "100%",
		justifyContent: "center",
	},
	title: {
		fontFamily: Fonts.HankenGrotesk_800ExtraBold,
		fontSize: 20,
		textTransform: "uppercase",
		color: "#fff",
		letterSpacing: 0,
		lineHeight: 0,
	},
});
