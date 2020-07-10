import {AppStateType} from "./reducers/rootReducers";

export const getPosts = (state: AppStateType) => {
    return state.data && state.data.posts
};

export const getPost = (state: AppStateType) => {
    return state.data && state.data.post
};
