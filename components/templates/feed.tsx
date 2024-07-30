import { RefreshControl, ScrollView } from "react-native";
import React from "react";
import StoriesHighlight from "../organisms/home/stories-highlight";
import HomeScreenTopContainer from "../organisms/home/top-container";
import ViewContainer from "../ui/layout/view-container";
import TimelinePosts from "../organisms/home/timeline-posts";
import { useSelector } from "react-redux";
import { postsState } from "../../redux/reducers/post";
import { useLazyGetPostsQuery } from "../../redux/api/post";
import { currentUser } from "../../redux/reducers/user";

const FeedTimelineTemplate = () => {
	const [fetchPosts, { isLoading }] = useLazyGetPostsQuery();
	const posts = useSelector(postsState);
	const user = useSelector(currentUser);
	return (
		<ViewContainer style={{ paddingHorizontal: 0 }}>
			<ScrollView
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}>
				<HomeScreenTopContainer />
				{user !== null ? <StoriesHighlight /> : <></>}
				<TimelinePosts {...{ posts }} />
			</ScrollView>
		</ViewContainer>
	);
};

export default FeedTimelineTemplate;
