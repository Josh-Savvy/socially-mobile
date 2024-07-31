import { StyleSheet, Text, TextProps, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React, { ReactNode } from "react";
import { Colors } from "../../../constants/Colors";
import { ArrowBackIcon } from "../../svgs";
import { router } from "expo-router";
import Fonts from "../../../constants/Fonts";

const styles = StyleSheet.create({
	back_btn: {
		borderWidth: 1,
		borderColor: Colors.grey,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
		width: 40,
		height: 40,
	},
});

export interface IButtonProps extends TouchableOpacityProps {
	title: string | ReactNode;
	titleProps?: TextProps;
	background?: string;
	borderWidth?: number;
	borderColor?: string;
	borderRadius?: number;
}

export const OutlineButton = ({
	title,
	titleProps,
	background,
	borderColor,
	borderRadius,
	borderWidth,
	...props
}: IButtonProps) => {
	return (
		<TouchableOpacity
			disabled={props.disabled}
			{...props}
			style={[
				{
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: props.disabled ? Colors.grey : background || "#d31",
					borderRadius: borderRadius || 8,
					padding: 5,
					paddingHorizontal: 10,
					borderWidth: borderWidth || 1,
					borderColor: borderColor || Colors.light_grey,
				},
				props.style,
			]}>
			{typeof title === "string" ? (
				<Text {...titleProps} style={[{ fontSize: 18 }, titleProps?.style]}>
					{title}
				</Text>
			) : (
				title
			)}
		</TouchableOpacity>
	);
};

export const BackButton = () => (
	<TouchableOpacity onPress={() => router.back()} activeOpacity={0.3} style={styles.back_btn}>
		<ArrowBackIcon />
	</TouchableOpacity>
);

export const FilledButton = ({
	title,
	titleProps,
	background,
	borderColor,
	borderRadius,
	borderWidth,
	...props
}: IButtonProps) => {
	return (
		<TouchableOpacity
			disabled={props.disabled}
			{...props}
			style={[
				{
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: props.disabled ? Colors.grey : background || "#d31",
					borderRadius: borderRadius || 8,
					padding: 12,
				},
				props.style,
			]}>
			{typeof title === "string" ? (
				<Text
					{...titleProps}
					style={[{ fontSize: 18, fontFamily: Fonts.HankenGrotesk_500Medium }, titleProps?.style]}>
					{title}
				</Text>
			) : (
				title
			)}
		</TouchableOpacity>
	);
};
