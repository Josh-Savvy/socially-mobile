import React, { ReactNode, useState } from "react";
import { TextInput, type TextStyle, type TextInputProps, StyleSheet, View, Text } from "react-native";
import { Colors } from "../../../constants/Colors";
import Fonts from "../../../constants/Fonts";

interface Props extends TextInputProps {
	background?: string;
	disabled?: boolean;
	label?: string;
	focusedStyle?: TextStyle;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
}

export const Input = ({ style, background, focusedStyle, label, rightIcon, leftIcon, ...props }: Props) => {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<>
			{label && <Text style={styles.input_label}>{label}</Text>}
			<View
				style={[
					styles.input_container,
					isFocused && focusedStyle,
					{
						borderWidth: (isFocused && focusedStyle?.borderWidth) || 2,
						borderColor: (isFocused && (focusedStyle?.borderColor || Colors.social_blue)) || "transparent",
					},
				]}>
				{leftIcon && <View style={{ paddingLeft: 5 }}>{leftIcon}</View>}
				<TextInput
					{...props}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					style={[
						{ backgroundColor: props.disabled ? Colors.light_grey : background || "#fff" },
						styles.input,
						style,
					]}
					cursorColor={Colors.social_blue}
					placeholderTextColor={"#ccc"}
				/>
				{rightIcon && <View style={{ paddingRight: 5 }}>{rightIcon}</View>}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	input_container: {
		marginBottom: 15,
		flexDirection: "row",
		backgroundColor: "#fff",
		borderRadius: 5,
		borderWidth: 2,
		borderColor: "transparent",
		overflow: "hidden",
		alignItems: "center",
	},
	input: {
		padding: 10,
		paddingVertical: 15,
		borderRadius: 5,
		fontSize: 16,
		flex: 1,
		color: "#000",
		fontFamily: Fonts.HankenGrotesk_500Medium,
		letterSpacing: 0,
		lineHeight: 0,
	},
	input_label: {
		marginBottom: 2,
		fontSize: 18,
		lineHeight: 0,
		letterSpacing: 0,
		fontFamily: Fonts.HankenGrotesk_600SemiBold,
		color: "#fff",
	},
});
