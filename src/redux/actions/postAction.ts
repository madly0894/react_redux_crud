import axios from "axios";
import {API} from "../../constants";
import {
    CommentType,
    CommonType,
    PostsType,
    PostType
} from "../../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionTypes} from "../reducers/rootReducers";
// import {Dispatch} from "redux";

const error = (): object => {
    return new Error("Error from server");
};

export type ActionTypes = InferActionTypes<typeof actions>;

// type DispatchType = Dispatch<ActionTypes>

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

// GET List all posts

export const get_listAllPosts = (): ThunkType => async (dispatch) => {
    try {
        const res = await axios.get<PostsType>(API._get)
            .then((res) => res.data);

        dispatch(actions.dispatchListAllPosts(res));
    } catch (e) {
        error()
    }
};

// POST Create a post

export const post_createPost = (title: string, body: string): ThunkType => async (dispatch) => {
    try {
        const res = await axios.post<CommonType>(API._get,
            {
                title: title,
                body: body
            }).then(res => res.data);

        dispatch(actions.dispatchCreatePost(res));
    } catch (e) {
        error()
    }
};

// PUT Update a post

export const put_updatePost = (title: string, body: string, id: number): ThunkType => async (dispatch) => {
    try {
        const res = await axios.put<CommonType>(`${API._get}/${id}`,
            {
                title: title,
                body: body
            }).then(res => res.data);

        dispatch(actions.dispatchUpdatePost(res));
    } catch (e) {
        error()
    }
};

// DEL Delete a post

export const del_deletePost = (id: number): ThunkType => async (dispatch) => {
    try {
        await axios.delete(`${API._get}/${id}`);

        dispatch(actions.dispatchDeletePost(id));
    } catch (e) {
        error()
    }
};

// GET Retrieve a post

export const get_onePost = (id: number): ThunkType => async (dispatch) => {
    try {
        const res = await axios.get<PostType>(`${API._get}/${id}?_embed=comments`)
            .then(res => res.data);

        dispatch(actions.dispatchOnePost(res));
    } catch (e) {
        error()
    }
};

// POST Create a comment

export const post_createComment = (id: number, body: string): ThunkType => async (dispatch) => {
    try {
        const res = await axios.post<CommentType>(API._post,
            {
                postId: id,
                body: body
            })
            .then(res => res.data);

        dispatch(actions.dispatchCreateComment(res));
    } catch (e) {
        error()
    }
};

export const actions = {
    dispatchListAllPosts: (posts: PostsType) => ({
        type: "GET_POSTS",
        posts
    } as const),
    dispatchUpdatePost: (updatePost: CommonType) => ({
        type: "UPDATE_POST",
        updatePost
    } as const),
    dispatchCreatePost: (addPost: CommonType) => ({
        type: "ADD_POST",
        addPost
    } as const),
    dispatchDeletePost: (id: number) => ({
        type: "DELETE_POST",
        id
    } as const),
    dispatchOnePost: (onePost: PostType) => ({
        type: "ONE_POST",
        onePost
    } as const),
    dispatchCreateComment: (newComment: CommentType) => ({
        type: "NEW_COMMENT",
        newComment
    } as const)
};