import React from "react";
import { ReactNode } from "react";
import type { PostReactionType } from "../../interfaces/post";
import { IconProps } from ".";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default {
	angry: (props: IconProps) => {
		return <View></View>;
	},
	like: ({ width, height, color, ...props }: IconProps) => {
		return (
			<Svg width={width || "14"} height={height || "14"} viewBox="0 0 14 14" fill="none" {...props}>
				<Path
					d="M8.33333 5.66667H11.5093C11.7366 5.66667 11.96 5.72476 12.1585 5.83542C12.357 5.94607 12.5239 6.10562 12.6434 6.29891C12.7629 6.4922 12.831 6.71283 12.8413 6.93984C12.8515 7.16686 12.8036 7.39272 12.702 7.596L10.3687 12.2627C10.2579 12.4843 10.0876 12.6707 9.8768 12.8009C9.66601 12.9312 9.42311 13.0001 9.17533 13H6.49733C6.38867 13 6.28 12.9867 6.174 12.96L3.66667 12.3333M8.33333 5.66667V2.33333C8.33333 1.97971 8.19286 1.64057 7.94281 1.39052C7.69276 1.14048 7.35362 1 7 1H6.93667C6.60333 1 6.33333 1.27 6.33333 1.60333C6.33333 2.07933 6.19267 2.54467 5.928 2.94067L3.66667 6.33333V12.3333M8.33333 5.66667H7M3.66667 12.3333H2.33333C1.97971 12.3333 1.64057 12.1929 1.39052 11.9428C1.14048 11.6928 1 11.3536 1 11V7C1 6.64638 1.14048 6.30724 1.39052 6.05719C1.64057 5.80714 1.97971 5.66667 2.33333 5.66667H4"
					stroke={color || "#ECEBED"}
					strokeWidth="1.4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</Svg>
		);
	},
	love: (props: IconProps) => {
		return <View></View>;
	},
	wow: (props: IconProps) => {
		return <View></View>;
	},
	sad: (props: IconProps) => {
		return <View></View>;
	},
};
