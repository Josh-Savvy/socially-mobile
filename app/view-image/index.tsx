import { View, Text } from "react-native";
import React from "react";
import { useGlobalSearchParams } from "expo-router";

const ViewImage = () => {
	const params = useGlobalSearchParams<{ url: string }>();
	console.log({ params: params.url });
	// url
	return (
		<View>
			<Text>ViewImage</Text>
		</View>
	);
};

export default ViewImage;
