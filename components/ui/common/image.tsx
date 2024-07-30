import { StyleProp, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image, ImageStyle } from "expo-image";
import { blurhash } from "../../../utils";

const ImageComponent = ({
	sourceUrl,
	style,
	transition,
}: {
	sourceUrl: string;
	style?: StyleProp<ImageStyle>;
	transition?: number;
}) => {
	return (
		<Image
			style={[{ position: "absolute", zIndex: 1, width: "100%", height: "100%" }, style]}
			source={sourceUrl}
			placeholder={{ blurhash }}
			contentFit="cover"
			transition={transition || 500}
		/>
	);
};

export default ImageComponent;

const styles = StyleSheet.create({});
