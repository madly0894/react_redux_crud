import * as type from "../types";

const initialState = null;

export default function (state = initialState, action) {
    switch (action.type) {
        case type.GET_POSTS:
            return {
                ...state,
                posts: action.posts
            };
        case type.GET_POST:
            return {
                ...state,
                // posts: state.posts.concat(action.post)
                posts: [...state.posts, action.post]
            };
        default:
            return state;
    }
}