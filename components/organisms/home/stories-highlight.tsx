import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import useStoriesHighlights from "../../../hooks/useStoriesHighlights";
import { StoryHighlightCard } from "../../ui/cards/story";
import { router } from "expo-router";

const StoriesHighlight = () => {
	const { stories } = useStoriesHighlights();
	return (
		<View style={styles.container}>
			<FlatList
				initialNumToRender={15}
				data={stories}
				extraData={stories}
				horizontal
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item: story }) => (
					<StoryHighlightCard {...{ story, onPress: () => router.push(`/story/${story.id}`) }} />
				)}
			/>
		</View>
	);
};

export default StoriesHighlight;

const styles = StyleSheet.create({
	container: { paddingTop: "5%", paddingHorizontal: 15 },
});
