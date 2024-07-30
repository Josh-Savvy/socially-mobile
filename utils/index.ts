import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../config";

export const getToken = async () => {
	return await AsyncStorage.getItem(config.access_token_key);
};

export const logOutUser = async () => {
	await AsyncStorage.removeItem(config.access_token_key);
	// Todo: other actions
};

export const getGreeting = (hours: number) => {
	return hours < 12 ? "Good Morning" : hours < 18 ? "Good Afternoon" : "Good Evening";
};

export const blurhash =
	"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
