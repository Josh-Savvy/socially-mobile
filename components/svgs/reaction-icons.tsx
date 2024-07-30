import React from "react";
import { ReactNode } from "react";
import type { PostReactionType } from "../../interfaces/post";
import { IconProps } from ".";
import { View } from "react-native";

export default (): Record<PostReactionType, (props: IconProps) => ReactNode> => ({
	angry: (props) => {
		return <View></View>;
	},
	like: (props) => {
		return <View></View>;
	},
	love: (props) => {
		return <View></View>;
	},
	wow: (props) => {
		return <View></View>;
	},
	sad: (props) => {
		return <View></View>;
	},
});
