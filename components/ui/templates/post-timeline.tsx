import { StyleSheet, Text, View } from "react-native";
import React from "react";
import type IPost from "../../../interfaces/post";

type Props = { posts: IPost[] };

const PostTimeline = (props: Props) => {
	return (
		<View>
			<Text>PostTimeline</Text>
		</View>
	);
};

export default PostTimeline;

const styles = StyleSheet.create({});
