import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../config";

export const getToken = async () => {
	return await AsyncStorage.getItem(config.access_token_key);
};

export const logOutUser = async () => {
	await AsyncStorage.removeItem(config.access_token_key);
	// Todo: other actions
};
