import * as type from "../types";

const initialState = null;

export default function (state = initialState, action) {
    switch (action.type) {
        case type.GET_POSTS:
            return {
                ...state,
                posts: action.posts
            };
        case type.ADD_POST:
            return {
                ...state,
                // posts: state.posts.concat(action.post)
                posts: [...state.posts, action.addPost]
            };
        case type.UPDATE_POST:
            const editPost = state.posts.map(post => post.id === action.updatePost.id ? {...post, ...action.updatePost} : post);

            return {
                ...state,
                posts: editPost
            };
        case type.DELETE_POST:
            const newPosts = state.posts.filter(post => post.id !== action.id);

            return {
                ...state,
                posts: newPosts
            };
        case type.ONE_POST:
            return {
                ...state,
                post: action.onePost
            };
        case type.NEW_COMMENT:
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
