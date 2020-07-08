import axios from "axios";
import {API} from "../../constants";
import * as type from "../types";
import {CommentType, CommonType, PostsType, PostType} from "../../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../reducers/rootReducers";
// import {Dispatch} from "redux";

const error = (): object => {
    return new Error("Error from server");
};

export type ActionTypes = GetPostsType | AddNewPostType | UpdatePostType |
    DeletePostType | GetOnePostType | CreateCommentType;

// type DispatchType = Dispatch<ActionTypes>

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

// GET List all posts

export const get_listAllPosts = (): ThunkType => async (dispatch) => {
    try {
        const res = await axios.get<PostsType>(API._get)
            .then((res) => res.data);

        dispatch(dispatchListAllPosts(res));
    } catch (e) {
        error()
    }
};

type GetPostsType = {
    type: typeof type.GET_POSTS,
    posts: PostsType
}

export const dispatchListAllPosts = (posts: PostsType): GetPostsType => ({
    type: type.GET_POSTS,
    posts
});

// POST Create a post

export const post_createPost = (title: string, body: string): ThunkType => async (dispatch) => {
    try {
        const res = await axios.post<CommonType>(API._get,
            {
                title: title,
                body: body
            }).then(res => res.data);

        dispatch(dispatchCreatePost(res));
    } catch (e) {
        error()
    }
};

type AddNewPostType = {
    type: typeof type.ADD_POST,
    addPost: CommonType
}

export const dispatchCreatePost = (addPost: CommonType): AddNewPostType => ({
    type: type.ADD_POST,
    addPost
});

// PUT Update a post

export const put_updatePost = (title: string, body: string, id: number): ThunkType => async (dispatch) => {
    try {
        const res = await axios.put<CommonType>(`${API._get}/${id}`,
            {
                title: title,
                body: body
            }).then(res => res.data);

        dispatch(dispatchUpdatePost(res));
    } catch (e) {
        error()
    }
};

type UpdatePostType = {
    type: typeof type.UPDATE_POST,
    updatePost: CommonType
}

export const dispatchUpdatePost = (updatePost: CommonType): UpdatePostType => ({
    type: type.UPDATE_POST,
    updatePost
});

// DEL Delete a post

export const del_deletePost = (id: number): ThunkType => async (dispatch) => {
    try {
        await axios.delete(`${API._get}/${id}`);

        dispatch(dispatchDeletePost(id));
    } catch (e) {
        error()
    }
};

type DeletePostType = {
    type: typeof type.DELETE_POST,
    id: number
}

export const dispatchDeletePost = (id: number): DeletePostType => ({
    type: type.DELETE_POST,
    id
});

// GET Retrieve a post

export const get_onePost = (id: number): ThunkType => async (dispatch) => {
    try {
        const res = await axios.get<PostType>(`${API._get}/${id}?_embed=comments`)
            .then(res => res.data);

        dispatch(dispatchOnePost(res));
    } catch (e) {
        error()
    }
};

type GetOnePostType = {
    type: typeof type.ONE_POST,
    onePost: PostType
}

export const dispatchOnePost = (onePost: PostType): GetOnePostType => ({
    type: type.ONE_POST,
    onePost
});

// POST Create a comment

export const post_createComment = (id: number, body: string): ThunkType => async (dispatch) => {
    try {
        const res = await axios.post<CommentType>(API._post,
            {
                postId: id,
                body: body
            })
            .then(res => res.data);

        dispatch(dispatchCreateComment(res));
    } catch (e) {
        error()
    }
};

type CreateCommentType = {
    type: typeof type.NEW_COMMENT,
    newComment: CommentType
}

export const dispatchCreateComment = (newComment: CommentType): CreateCommentType => ({
    type: type.NEW_COMMENT,
    newComment
});
