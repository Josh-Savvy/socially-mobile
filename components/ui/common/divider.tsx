import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Colors } from "../../../constants/Colors";

const Divider = () => <View style={styles.divider} />;

const styles = StyleSheet.create({ divider: { height: 2, backgroundColor: Colors.grey } });

export default Divider;
