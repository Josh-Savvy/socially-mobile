import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../config";
import IPost from "../interfaces/post";
import { differenceInMonths, format, formatDistanceToNow } from "date-fns";

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

export const formatPostTimestamp = (post: IPost) => {
	const date = new Date(post.createdAt);
	const now = new Date();
	const monthsDiff = differenceInMonths(now, date);
	if (monthsDiff === 0) {
		const hoursDiff = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
		if (hoursDiff < 24)
			return formatDistanceToNow(date, { addSuffix: true })
				.replace("about", "")
				.replace(" hours", "h")
				.replace(" minutes", "m")
				.replace(" seconds", "");
	}
	if (monthsDiff < 6)
		return formatDistanceToNow(date, { addSuffix: false })
			.replace("about", "")
			.replace(" hours", "h")
			.replace(" minutes", "m")
			.replace(" seconds", "");
	return format(date, "MMMM dd, yyyy HH:mm:ss")
		.replace("about", "")
		.replace(" hours", "h")
		.replace(" minutes", "m")
		.replace(" seconds", "");
};

export const formatNumber = (num: number): string => {
	return num >= 1_000_000
		? `${(num / 1_000_000).toFixed(1)}M`
		: num >= 1_000
		? `${(num / 1_000).toFixed(1)}K`
		: num.toString();
};
