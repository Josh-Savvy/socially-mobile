import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import type IPost from "../../../interfaces/post";
import { useRouter } from "expo-router";

export const PostHighlightCard = ({ post }: { post: IPost }) => {
	const router = useRouter();
	return (
		<TouchableOpacity onPress={() => router.push(`/post/${post.id}`)}>
			<View style={styles.container}>
				<Text>PostHighlightCard</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
		width: "100%",
		minHeight: 100,
		maxHeight: 300,
		paddingVertical: 5,
	},
});
