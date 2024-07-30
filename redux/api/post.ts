import type IPost from "../../interfaces/post";
import { PostReactionType } from "../../interfaces/post";
import { logOutUser } from "../../utils";
import { updatePost } from "../reducers/post";
import api from "./index";

const postsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getPosts: builder.query<IPost[], void>({
			query: () => ({ url: "/posts/", method: "GET" }),
			keepUnusedDataFor: 1200,
			providesTags: (result, error) => {
				if (error?.status === 401) {
					console.log({ error });
					logOutUser();
				}
				console.log({ result, error });
				return result ? [{ type: "POSTS" }] : error?.status === 401 ? ["UNAUTHORIZED"] : ["UNKNOWN_ERROR"];
			},
		}),
		viewPost: builder.query<IPost, { id: string }>({
			query: (query) => ({ url: `/posts/${query.id}`, method: "GET" }),
			keepUnusedDataFor: 1200,
			providesTags: (result, error) => {
				if (error?.status === 401) {
					console.log({ error });
					logOutUser();
				}
				return result ? [{ type: "POSTS" }] : error?.status === 401 ? ["UNAUTHORIZED"] : ["UNKNOWN_ERROR"];
			},
		}),
		likePost: builder.mutation<IPost, { id: string; reaction: PostReactionType; userId: number }>({
			query: (query) => {
				console.log({ query });
				return { url: `/posts/${query.id}`, method: "POST", body: { reaction: query.reaction } };
			},
			invalidatesTags: ["POSTS"],
			async onQueryStarted({ id, reaction, userId }, { dispatch, queryFulfilled }) {
				// Optimistic update
				const patchResult = dispatch(
					postsApi.util.updateQueryData("getPosts", undefined, (draft) => {
						const post = draft.find((post: IPost) => post.id === id);
						if (post) {
							if (!post.reactions) post.reactions = [];
							post.reactions = post.reactions.filter((r) => r.user_id !== userId);
							post.reactions.push({ id: Date.now(), post_id: id, type: reaction, user_id: userId });
						}
					}),
				);
				// dispatch(updatePost({ id }));
				try {
					await queryFulfilled;
				} catch (err) {
					patchResult.undo();
					// dispatch(updatePost({ id }));
				}
			},
		}),
	}),
	overrideExisting: true,
});

export const { useLazyGetPostsQuery, useGetPostsQuery, useLikePostMutation, useViewPostQuery, useLazyViewPostQuery } =
	postsApi;

export default postsApi;
