import {PostsType, PostType} from "../../types/types";
import {ActionTypes} from "../actions/postAction";

const initialState = {
    posts: [] as PostsType,
    post: {} as PostType
};

type InitialStateType = typeof initialState;

export default function (state = initialState, action: ActionTypes): InitialStateType {
    switch (action.type) {
        case "GET_POSTS":
            return {
                ...state,
                posts: action.posts
            };
        case "ADD_POST":
            return {
                ...state,
                // posts: state.posts.concat(action.post)
                posts: [...state.posts, action.addPost]
            };
        case "UPDATE_POST":
            const editPost = state.posts.map(post => post.id === action.updatePost.id ?
                {...post, ...action.updatePost} : post);

            return {
                ...state,
                posts: editPost
            };
        case "DELETE_POST":
            const newPosts = state.posts.filter(post => post.id !== action.id);

            return {
                ...state,
                posts: newPosts
            };
        case "ONE_POST":
            return {
                ...state,
                post: action.onePost
            };
        case "NEW_COMMENT":
            return {
                ...state,
                post: {
                    ...state.post,
                    comments: [...state.post.comments, action.newComment]
                    // comments: state.post.comments.concat(action.newComment)
                }
            };
        default:
            return state;
    }
}
