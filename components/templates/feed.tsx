import { RefreshControl, ScrollView } from "react-native";
import React, { useState } from "react";
import StoriesHighlight from "../organisms/home/stories-highlight";
import HomeScreenTopContainer from "../organisms/home/top-container";
import ViewContainer from "../ui/layout/view-container";
import TimelinePosts from "../organisms/home/timeline-posts";
import usePosts from "../../hooks/usePosts";

const FeedTimelineTemplate = () => {
	const [refreshing, setRefreshing] = useState(false);
	const { posts, fetchMore } = usePosts();

	return (
		<ViewContainer style={{ paddingHorizontal: 0 }}>
			<ScrollView
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={() => {
							setRefreshing(true);
							setTimeout(function () {
								setRefreshing(false);
							}, 2000);
						}}
					/>
				}>
				<HomeScreenTopContainer />
				<StoriesHighlight />
				<TimelinePosts {...{ posts }} />
			</ScrollView>
		</ViewContainer>
	);
};

export default FeedTimelineTemplate;
