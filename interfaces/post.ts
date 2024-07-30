import IUser from "./user";

export type MediaType = "image" | "video" | "gif" | "pdf";

export default interface IPost {}

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
