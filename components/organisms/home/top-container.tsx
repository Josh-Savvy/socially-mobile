import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useGreeting from "../../../hooks/useGreeting";
import { Colors } from "../../../constants/Colors";
import OutlineButton from "../../ui/buttons/outline-button";
import { MessageIcon, UserIcon } from "../../svgs";
import Fonts from "../../../constants/Fonts";
import { useRouter } from "expo-router";

const HomeScreenTopContainer = () => {
	const isAuth = false;
	const user = { first_name: "" };
	const greeting = useGreeting();
	const router = useRouter();
	return (
		<View style={{ flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
			<Text style={{ color: Colors.white, fontSize: 21, fontFamily: Fonts.HankenGrotesk_600SemiBold }}>
				{greeting}, {isAuth ? `${user.first_name}.` : "User"}.
			</Text>
			{isAuth ? (
				<OutlineButton
					onPress={() => router.push("/(auth)/login")}
					borderRadius={50}
					style={{ padding: 5, paddingHorizontal: 5 }}
					background="transparent"
					title={
						<View style={{ position: "relative" }}>
							{/* //Todo: only show when there's new message */}
							<View
								style={{
									position: "absolute",
									right: 0,
									backgroundColor: Colors.social_pink,
									borderWidth: 0.5,
									borderColor: "#fff",
									padding: 3,
									borderRadius: 50,
									zIndex: 1,
								}}
							/>
							<MessageIcon height={22} width={22} />
						</View>
					}
				/>
			) : (
				<OutlineButton
					onPress={() => router.push("/(auth)/login")}
					borderRadius={50}
					style={{ padding: 5, paddingHorizontal: 5 }}
					background="transparent"
					title={<UserIcon height={22} width={22} />}
				/>
			)}
		</View>
	);
};

export default HomeScreenTopContainer;
