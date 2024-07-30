import { RefreshControl, ScrollView } from "react-native";
import React, { useState } from "react";
import StoriesHighlight from "../organisms/home/stories-highlight";
import HomeScreenTopContainer from "../organisms/home/top-container";
import ViewContainer from "../ui/layout/view-container";

const FeedTimelineTemplate = () => {
	const [refreshing, setRefreshing] = useState(false);
	return (
		<ViewContainer>
			<ScrollView
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
			</ScrollView>
		</ViewContainer>
	);
};

export default FeedTimelineTemplate;
