import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { IStory } from "../../../interfaces/post";
import Fonts from "../../../constants/Fonts";
import { Colors } from "../../../constants/Colors";
import { Image } from "expo-image";
import { blurhash } from "../../../utils";
import { LinearGradient } from "expo-linear-gradient";
import ImageComponent from "../common/image";

export const StoryHighlightCard = ({ story, onPress }: { story: IStory; onPress?: () => void }) => {
	return (
		<TouchableOpacity activeOpacity={0.6} onPress={onPress}>
			<View style={styles.highlight_container}>
				<ImageComponent sourceUrl={String(story.media?.url)} transition={600} />
				<LinearGradient
					colors={["#0000009a", "#0000000a"]}
					start={{ x: 0, y: 1 }}
					end={{ x: 0, y: 0 }}
					style={styles.gradient}
				/>
				<LinearGradient colors={[Colors.gradient_l, Colors.gradient_r]} style={styles.author_image_container}>
					<View style={styles.author_image_inner_container}>
						<ImageComponent sourceUrl={String(story.author.avatar)} transition={600} />
					</View>
				</LinearGradient>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	author_image_inner_container: {
		position: "relative",
		backgroundColor: Colors.dark_black,
		height: "100%",
		width: "100%",
		borderRadius: 50,
		overflow: "hidden",
	},
	author_image_container: {
		overflow: "hidden",
		borderRadius: 50,
		padding: 3,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		zIndex: 10,
		height: 50,
		width: 50,
		marginBottom: 10,
	},
	gradient: { height: "100%", width: "100%", position: "absolute", zIndex: 1 },
	image: {
		position: "absolute",
		zIndex: 1,
		width: "100%",
		height: "100%",
	},
	highlight_container: {
		marginRight: 12.5,
		position: "relative",
		width: 130,
		height: 180,
		borderRadius: 20,
		backgroundColor: Colors.light_grey,
		overflow: "hidden",
		justifyContent: "flex-end",
		flex: 1,
		// padding: 8,
	},
});
