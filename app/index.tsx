import React, { useState } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";
import ViewContainer from "../components/ui/layout/view-container";
import HomeScreenTopContainer from "../components/organisms/home/top-container";
import StoriesHighlight from "../components/organisms/home/stories-highlight";

export default function Home() {
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
}

const styles = StyleSheet.create({});
