import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import type IPost from "../../../interfaces/post";
import { useRouter } from "expo-router";
import ImageComponent from "../common/image";
import Fonts from "../../../constants/Fonts";
import { Colors } from "../../../constants/Colors";
import { formatNumber, formatPostTimestamp } from "../../../utils";
import { BookmarkIcon, CommentIcon, ShareIcon, VeticalEllipsisIcon } from "../../svgs";
import ReactionIcons from "../../svgs/reaction-icons";
import usePostActions from "../../../hooks/usePostActions";

export const PostHighlightCard = ({ post }: { post: IPost }) => {
	const router = useRouter();
	const { bookmarkPost, likePost, sharePost } = usePostActions();

	const ThumbsLikeIcon = ReactionIcons["like"];

	return (
		<>
			<View style={styles.container}>
				<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<View
							style={{
								borderRadius: 50,
								height: 40,
								width: 40,
								overflow: "hidden",
								position: "relative",
							}}>
							<ImageComponent sourceUrl={String(post.author.avatar)} />
						</View>
						<View style={{ marginLeft: 6 }}>
							<View style={{ flexDirection: "row" }}>
								<Text
									style={{
										fontFamily: Fonts.HankenGrotesk_800ExtraBold,
										color: Colors.white,
										fontSize: 15,
									}}>
									{post.author.first_name}
								</Text>
								<Text
									style={{
										fontFamily: Fonts.HankenGrotesk_400Regular,
										color: Colors.light_grey,
										fontSize: 14,
										marginHorizontal: 5,
									}}>
									@{post.author.username}
								</Text>
							</View>
							<Text
								style={{
									fontFamily: Fonts.HankenGrotesk_500Medium,
									color: Colors.light_grey,
									fontSize: 13,
								}}>
								{formatPostTimestamp(post)}
							</Text>
						</View>
					</View>
					<TouchableOpacity activeOpacity={0.5}>
						<VeticalEllipsisIcon height={15} />
					</TouchableOpacity>
				</View>
				{/* Content */}
				<View style={{ padding: 5 }}>
					<Text
						style={{
							fontFamily: Fonts.HankenGrotesk_400Regular,
							fontSize: 15,
							color: Colors.light_white,
							lineHeight: 0,
							letterSpacing: 0,

							paddingVertical: 6.5,
						}}>
						{post.content}
					</Text>
					{/* Reactions */}
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							paddingTop: 10,
						}}>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<TouchableOpacity onPress={() => likePost(post.id)}>
								<View style={{ flexDirection: "row", alignItems: "center" }}>
									<ThumbsLikeIcon height={"20"} width={"17"} />
									<Text style={{ color: "#fff", marginHorizontal: 4 }}>
										{post.reactions.length > 0 ? formatNumber(post.reactions.length) : " "}
									</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => router.push(`/post/${post.id}`)}>
								<View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 6 }}>
									<CommentIcon size={18} />
									<Text style={{ color: "#fff", marginHorizontal: 4 }}>
										{post.comments.length > 0 ? formatNumber(post.comments.length) : " "}
									</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => sharePost(post.id)}>
								<ShareIcon size={18} />
							</TouchableOpacity>
						</View>
						<TouchableOpacity onPress={() => bookmarkPost(post)}>
							<BookmarkIcon />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
		width: "100%",
		minHeight: 100,
		maxHeight: 300,
		paddingVertical: 10,
		paddingTop: 20,
	},
});
