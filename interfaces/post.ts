import IUser from "./user";

export type MediaType = "image" | "video" | "gif" | "pdf";

export default interface IPost {
	id: string;
	content: string;
	media: PostMedia[];
	createdAt: string;
	updatedAt: string;
	comments: Comment[];
	reactions: Reaction[];
	author: Partial<IUser>;
	views: number;
	tagged: IUser[];
}

export interface Comment {
	id: number;
	text: string;
	authorId: number;
	postId: string;
	reactions: Reaction[];
}

export type PostReactionType = "like" | "love" | "wow" | "angry" | "sad";

export interface Reaction {
	id: number;
	type: PostReactionType;
	user_id: number;
	post_id: string;
}

export interface PostMedia {
	type: MediaType;
	id: string;
	url: string;
}

export interface IStory {
	id: number;
	caption: string | null;
	media: PostMedia | null;
	expiresAt: string;
	views: IUser[];
	author: IUser;
	author_id: number;
	createdAt: string;
	updatedAt: string;
}
