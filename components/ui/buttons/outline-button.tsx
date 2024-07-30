import { Text, TextProps, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React, { ReactNode } from "react";
import { Colors } from "../../../constants/Colors";

export interface IButtonProps extends TouchableOpacityProps {
	title: string | ReactNode;
	titleProps?: TextProps;
	background?: string;
	borderWidth?: number;
	borderColor?: string;
	borderRadius?: number;
}

const OutlineButton = ({
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
			{...props}
			style={[
				{
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: background || "#d31",
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

export default OutlineButton;
