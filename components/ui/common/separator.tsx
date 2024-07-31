import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";
import Fonts from "../../../constants/Fonts";

type Props = { text: string };

const SeparatorWithText: React.FC<Props> = ({ text }) => {
	return (
		<View style={styles.container}>
			<View style={styles.sideView} />
			<Text style={styles.text}>{text || "Text here"}</Text>
			<View style={styles.sideView} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%" },
	sideView: { flex: 1, height: 1, backgroundColor: Colors.grey },
	text: { marginHorizontal: 10, fontSize: 16, color: "#fff", fontFamily: Fonts.HankenGrotesk_500Medium },
});

export default SeparatorWithText;
