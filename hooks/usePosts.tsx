import React, { useState } from "react";
import IPost from "../interfaces/post";

type ReturnProps = {
	posts: IPost[];
	fetchMore: () => void;
};

const usePosts = (): ReturnProps => {
	const [posts, setPosts] = useState<IPost[]>(initial_posts);

	const fetchMore = async () => {
		console.log("Fetch more...");
		setPosts((p) => p.concat(initial_posts));
	};

	return { posts, fetchMore };
};

const initial_posts: IPost[] = [
	{
		id: "f9c4c0b4-a8c8-4794-9c59-7348f6d0b63a",
		content: "Home PNG Steel CSS Functionality hacking circuit et voluptatem omnis",
		media: [
			{
				id: "4ce91430-ac38-4d3d-a8a6-95e8b0d3c398",
				url: "https://picsum.photos/seed/yX4AuNjZc/640/480",
				type: "image",
			},
			{
				id: "0b6867ac-5593-46ee-8f7f-d9c004f93b5b",
				url: "https://picsum.photos/seed/OHyBsZ/640/480",
				type: "video",
			},
			{
				id: "0d3042ed-2f0d-464d-a593-4d5310556909",
				url: "https://picsum.photos/seed/aeVKMop6/640/480",
				type: "video",
			},
		],
		createdAt: "2024-07-29T21:17:37.310Z",
		updatedAt: "2024-07-29T21:17:37.310Z",
		comments: [
			{
				id: 5,
				text: "Island Buckinghamshire Frozen SMS Sudanese hacking application invoice",
				authorId: 10,
				postId: "f9c4c0b4-a8c8-4794-9c59-7348f6d0b63a",
				reactions: [],
			},
			{
				id: 6,
				text: "Buckinghamshire Orchestrator Bedfordshire Plastic innovative Guinea-Bissau Granite Greens Ball methodologies Grocery",
				authorId: 10,
				postId: "f9c4c0b4-a8c8-4794-9c59-7348f6d0b63a",
				reactions: [],
			},
		],
		reactions: [],
		author: {
			id: 10,
			first_name: "Terrance",
			last_name: "Torphy",
			email: "joshdev@yopmail.com",
			avatar: null,
			job_title: "Principal Group Specialist",
			bio: "iterate 24/365 synergies",
		},
		views: 0,
		tagged: [],
	},
	{
		id: "f9c4c0b4-a8c8-4794-9c59-7348f6d0b63a",
		content: "Home PNG Steel CSS Functionality hacking circuit et voluptatem omnis",
		media: [
			{
				id: "4ce91430-ac38-4d3d-a8a6-95e8b0d3c398",
				url: "https://picsum.photos/seed/yX4AuNjZc/640/480",
				type: "image",
			},
			{
				id: "0b6867ac-5593-46ee-8f7f-d9c004f93b5b",
				url: "https://picsum.photos/seed/OHyBsZ/640/480",
				type: "video",
			},
			{
				id: "0d3042ed-2f0d-464d-a593-4d5310556909",
				url: "https://picsum.photos/seed/aeVKMop6/640/480",
				type: "video",
			},
		],
		createdAt: "2024-07-29T21:17:37.310Z",
		updatedAt: "2024-07-29T21:17:37.310Z",
		comments: [
			{
				id: 5,
				text: "Island Buckinghamshire Frozen SMS Sudanese hacking application invoice",
				authorId: 10,
				postId: "f9c4c0b4-a8c8-4794-9c59-7348f6d0b63a",
				reactions: [],
			},
			{
				id: 6,
				text: "Buckinghamshire Orchestrator Bedfordshire Plastic innovative Guinea-Bissau Granite Greens Ball methodologies Grocery",
				authorId: 10,
				postId: "f9c4c0b4-a8c8-4794-9c59-7348f6d0b63a",
				reactions: [],
			},
		],
		reactions: [],
		author: {
			id: 10,
			first_name: "Terrance",
			last_name: "Torphy",
			email: "joshdev@yopmail.com",
			avatar: null,
			job_title: "Principal Group Specialist",
			bio: "iterate 24/365 synergies",
		},
		views: 0,
		tagged: [],
	},
	{
		id: "f9c4c0b4-a8c8-4794-9c59-7348f6d0b63a",
		content: "Home PNG Steel CSS Functionality hacking circuit et voluptatem omnis",
		media: [
			{
				id: "4ce91430-ac38-4d3d-a8a6-95e8b0d3c398",
				url: "https://picsum.photos/seed/yX4AuNjZc/640/480",
				type: "image",
			},
			{
				id: "0b6867ac-5593-46ee-8f7f-d9c004f93b5b",
				url: "https://picsum.photos/seed/OHyBsZ/640/480",
				type: "video",
			},
			{
				id: "0d3042ed-2f0d-464d-a593-4d5310556909",
				url: "https://picsum.photos/seed/aeVKMop6/640/480",
				type: "video",
			},
		],
		createdAt: "2024-07-29T21:17:37.310Z",
		updatedAt: "2024-07-29T21:17:37.310Z",
		comments: [
			{
				id: 5,
				text: "Island Buckinghamshire Frozen SMS Sudanese hacking application invoice",
				authorId: 10,
				postId: "f9c4c0b4-a8c8-4794-9c59-7348f6d0b63a",
				reactions: [],
			},
			{
				id: 6,
				text: "Buckinghamshire Orchestrator Bedfordshire Plastic innovative Guinea-Bissau Granite Greens Ball methodologies Grocery",
				authorId: 10,
				postId: "f9c4c0b4-a8c8-4794-9c59-7348f6d0b63a",
				reactions: [],
			},
		],
		reactions: [],
		author: {
			id: 10,
			first_name: "Terrance",
			last_name: "Torphy",
			email: "joshdev@yopmail.com",
			avatar: null,
			job_title: "Principal Group Specialist",
			bio: "iterate 24/365 synergies",
		},
		views: 0,
		tagged: [],
	},
	{
		id: "f9c4c0b4-a8c8-4794-9c59-7348f6d0b63a",
		content: "Home PNG Steel CSS Functionality hacking circuit et voluptatem omnis",
		media: [
			{
				id: "4ce91430-ac38-4d3d-a8a6-95e8b0d3c398",
				url: "https://picsum.photos/seed/yX4AuNjZc/640/480",
				type: "image",
			},
			{
				id: "0b6867ac-5593-46ee-8f7f-d9c004f93b5b",
				url: "https://picsum.photos/seed/OHyBsZ/640/480",
				type: "video",
			},
			{
				id: "0d3042ed-2f0d-464d-a593-4d5310556909",
				url: "https://picsum.photos/seed/aeVKMop6/640/480",
				type: "video",
			},
		],
		createdAt: "2024-07-29T21:17:37.310Z",
		updatedAt: "2024-07-29T21:17:37.310Z",
		comments: [
			{
				id: 5,
				text: "Island Buckinghamshire Frozen SMS Sudanese hacking application invoice",
				authorId: 10,
				postId: "f9c4c0b4-a8c8-4794-9c59-7348f6d0b63a",
				reactions: [],
			},
			{
				id: 6,
				text: "Buckinghamshire Orchestrator Bedfordshire Plastic innovative Guinea-Bissau Granite Greens Ball methodologies Grocery",
				authorId: 10,
				postId: "f9c4c0b4-a8c8-4794-9c59-7348f6d0b63a",
				reactions: [],
			},
		],
		reactions: [],
		author: {
			id: 10,
			first_name: "Terrance",
			last_name: "Torphy",
			email: "joshdev@yopmail.com",
			avatar: null,
			job_title: "Principal Group Specialist",
			bio: "iterate 24/365 synergies",
		},
		views: 0,
		tagged: [],
	},
	{
		id: "f9c4c0b4-a8c8-4794-9c59-7348f6d0b63a",
		content: "Home PNG Steel CSS Functionality hacking circuit et voluptatem omnis",
		media: [
			{
				id: "4ce91430-ac38-4d3d-a8a6-95e8b0d3c398",
				url: "https://picsum.photos/seed/yX4AuNjZc/640/480",
				type: "image",
			},
			{
				id: "0b6867ac-5593-46ee-8f7f-d9c004f93b5b",
				url: "https://picsum.photos/seed/OHyBsZ/640/480",
				type: "video",
			},
			{
				id: "0d3042ed-2f0d-464d-a593-4d5310556909",
				url: "https://picsum.photos/seed/aeVKMop6/640/480",
				type: "video",
			},
		],
		createdAt: "2024-07-29T21:17:37.310Z",
		updatedAt: "2024-07-29T21:17:37.310Z",
		comments: [
			{
				id: 5,
				text: "Island Buckinghamshire Frozen SMS Sudanese hacking application invoice",
				authorId: 10,
				postId: "f9c4c0b4-a8c8-4794-9c59-7348f6d0b63a",
				reactions: [],
			},
			{
				id: 6,
				text: "Buckinghamshire Orchestrator Bedfordshire Plastic innovative Guinea-Bissau Granite Greens Ball methodologies Grocery",
				authorId: 10,
				postId: "f9c4c0b4-a8c8-4794-9c59-7348f6d0b63a",
				reactions: [],
			},
		],
		reactions: [],
		author: {
			id: 10,
			first_name: "Terrance",
			last_name: "Torphy",
			email: "joshdev@yopmail.com",
			avatar: null,
			job_title: "Principal Group Specialist",
			bio: "iterate 24/365 synergies",
		},
		views: 0,
		tagged: [],
	},
	{
		id: "f9c4c0b4-a8c8-4794-9c59-7348f6d0b63a",
		content: "Home PNG Steel CSS Functionality hacking circuit et voluptatem omnis",
		media: [
			{
				id: "4ce91430-ac38-4d3d-a8a6-95e8b0d3c398",
				url: "https://picsum.photos/seed/yX4AuNjZc/640/480",
				type: "image",
			},
			{
				id: "0b6867ac-5593-46ee-8f7f-d9c004f93b5b",
				url: "https://picsum.photos/seed/OHyBsZ/640/480",
				type: "video",
			},
			{
				id: "0d3042ed-2f0d-464d-a593-4d5310556909",
				url: "https://picsum.photos/seed/aeVKMop6/640/480",
				type: "video",
			},
		],
		createdAt: "2024-07-29T21:17:37.310Z",
		updatedAt: "2024-07-29T21:17:37.310Z",
		comments: [
			{
				id: 5,
				text: "Island Buckinghamshire Frozen SMS Sudanese hacking application invoice",
				authorId: 10,
				postId: "f9c4c0b4-a8c8-4794-9c59-7348f6d0b63a",
				reactions: [],
			},
			{
				id: 6,
				text: "Buckinghamshire Orchestrator Bedfordshire Plastic innovative Guinea-Bissau Granite Greens Ball methodologies Grocery",
				authorId: 10,
				postId: "f9c4c0b4-a8c8-4794-9c59-7348f6d0b63a",
				reactions: [],
			},
		],
		reactions: [],
		author: {
			id: 10,
			first_name: "Terrance",
			last_name: "Torphy",
			email: "joshdev@yopmail.com",
			avatar: null,
			job_title: "Principal Group Specialist",
			bio: "iterate 24/365 synergies",
		},
		views: 0,
		tagged: [],
	},
];

export default usePosts;
