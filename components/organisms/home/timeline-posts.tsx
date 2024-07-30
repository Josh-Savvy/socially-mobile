import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import usePosts from "../../../hooks/usePosts";
import { PostHighlightCard } from "../../ui/cards/post";
import type IPost from "../../../interfaces/post";
import { Colors } from "../../../constants/Colors";

type Props = { handleRefresh?: () => void; posts: IPost[] };

const TimelinePosts = ({ handleRefresh, posts }: Props) => {
	return (
		<View style={styles.container}>
			{posts.map((item, index) => (
				<View key={index}>
					<Divider />
					<PostHighlightCard post={item} />
					{/* {index === posts.length - 1 && <Divider />} */}
				</View>
			))}
		</View>
	);
};

const Divider = () => <View style={styles.divider} />;

export default TimelinePosts;

const styles = StyleSheet.create({
	container: { paddingTop: 25 },
	divider: { height: 1, backgroundColor: Colors.grey },
});
