import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PostHighlightCard } from "../../ui/cards/post";
import type IPost from "../../../interfaces/post";
import { Colors } from "../../../constants/Colors";
import Divider from "../../ui/common/divider";

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

export default TimelinePosts;

const styles = StyleSheet.create({ container: { paddingTop: 25 } });
