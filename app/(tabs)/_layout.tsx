import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { Tabs } from "expo-router";
import navigationTabIcons from "../../components/svgs/navigation-tab-icons";
import { UserIcon } from "../../components/svgs";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../../constants/Colors";

type IconName = keyof typeof navigationTabIcons;

const TabsLayout = () => {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			{tabs.map((tab) => (
				<Tabs.Screen
					key={tab.name}
					name={tab.screen_name}
					options={{
						tabBarIcon: (props) => tabBarIcons[tab.name]({ ...props, name: tab.name }),
						tabBarLabelStyle: { display: "none" },
						tabBarStyle: { backgroundColor: "#000", height: 95, borderTopColor: "transparent" },
					}}
				/>
			))}
		</Tabs>
	);
};

const tabBarIcons: Record<
	IconName,
	(props: { focused: boolean; color: string; size: number; name: IconName }) => ReactNode
> = {
	FeedsIcon: ({ focused, ...props }) => navigationTabIcons[props.name]({ color: focused ? "#fff" : "#666" }),
	SearchIcon: ({ focused, ...props }) => navigationTabIcons[props.name]({ color: focused ? "#fff" : "#666" }),
	CreatePostIcon: ({ focused, ...props }) => {
		return (
			<LinearGradient
				colors={[Colors.gradient_l, Colors.gradient_r]}
				style={{ width: 45, height: 45, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
				{navigationTabIcons[props.name]({})}
			</LinearGradient>
		);
	},
	Notifications: ({ focused, ...props }) => navigationTabIcons[props.name]({ color: focused ? "#fff" : "#666" }),
	Profile: ({ focused, ...props }) => navigationTabIcons[props.name]({ color: focused ? "#fff" : "#666" }),
};

const tabs: { name: IconName; screen_name: string }[] = [
	{
		name: "FeedsIcon",
		screen_name: "index",
	},
	{
		name: "SearchIcon",
		screen_name: "search",
	},
	{
		name: "CreatePostIcon",
		screen_name: "(post)/create-post",
	},
	{
		name: "Notifications",
		screen_name: "notifications",
	},
	{
		name: "Profile",
		screen_name: "profile/index",
	},
];

export default TabsLayout;
