import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import IPost from "../interfaces/post";

type ReturnType = {
	bookmarkPost: (post: IPost) => void;
	likePost: (postId: string) => void;
	sharePost: (postId: string) => void;
};

const usePostActions = (): ReturnType => {
	const bookmarkPost = async (post: IPost) => {
		console.log({ post });
		Alert.alert("Post bookmarked!");
	};
	const likePost = async (postId: string) => {
		console.log({ postId });
	};

	const sharePost = async (postId: string) => {
		console.log({ postId });
	};

	return { bookmarkPost, likePost, sharePost };
};

export default usePostActions;
