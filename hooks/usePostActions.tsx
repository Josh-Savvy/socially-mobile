import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import IPost from "../interfaces/post";
import { useLikePostMutation } from "../redux/api/post";
import { useSelector } from "react-redux";
import { currentUser } from "../redux/reducers/user";

type ReturnType = {
	bookmarkPost: (post: IPost) => void;
	likePost: (postId: string) => void;
	sharePost: (postId: string) => void;
};

const usePostActions = (): ReturnType => {
	const user = useSelector(currentUser);
	const [likePostMutation, { isLoading }] = useLikePostMutation();
	const bookmarkPost = async (post: IPost) => {
		console.log({ post });
		Alert.alert("Post bookmarked!");
	};

	const likePost = async (postId: string) => {
		try {
			console.log({ postId });
			const res = await likePostMutation({ id: postId, reaction: "like", userId: Number(user?.id) });
			console.log({ res });
		} catch (error) {
			console.log({ error });
		}
	};

	const sharePost = async (postId: string) => {
		console.log({ postId });
	};

	return { bookmarkPost, likePost, sharePost };
};

export default usePostActions;
