import axios from "axios";
import {API} from "../../constants";
import * as type from "../types";

function error() {
    return new Error("Error from server");
}

// GET List all posts

export const get_listAllPosts = () => async (dispatch) => {
    try {
        const res = await axios.get(API._get)
            .then(res => res.data);

        dispatch(dispatchListAllPosts(res));
    } catch (e) {
        error()
    }
};

export const dispatchListAllPosts = (posts) => ({
    type: type.GET_POSTS,
    posts
});

// POST Create a post

export const post_createPost = (title, body) => async (dispatch) => {
    try {
        const res = await axios.post(API._get,
            {
                title: title,
                body: body
            }).then(res => res.data);

        dispatch(dispatchCreatePost(res));
    } catch (e) {
        error()
    }
};

export const dispatchCreatePost = (addPost) => ({
    type: type.ADD_POST,
    addPost
});

// PUT Update a post

export const put_updatePost = (title, body, id) => async (dispatch) => {
    try {
        const res = await axios.put(`${API._get}/${id}`,
            {
                title: title,
                body: body
            }).then(res => res.data);

        dispatch(dispatchUpdatePost(res));
    } catch (e) {
        error()
    }
};

export const dispatchUpdatePost = (updatePost) => ({
    type: type.UPDATE_POST,
    updatePost
});

// DEL Delete a post

export const del_deletePost = (id) => async (dispatch) => {
    try {
        await axios.delete(`${API._get}/${id}`);

        dispatch(dispatchDeletePost(id));
    } catch (e) {
        error()
    }
};

export const dispatchDeletePost = (id) => ({
    type: type.DELETE_POST,
    id
});

// GET Retrieve a post

export const get_onePost = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API._get}/${id}?_embed=comments`)
            .then(res => res.data);

        dispatch(dispatchOnePost(res));
    } catch (e) {
        error()
    }
};

export const dispatchOnePost = (onePost) => ({
    type: type.ONE_POST,
    onePost
});

// POST Create a comment

export const post_createComment = (id, body) => async (dispatch) => {

    const postId = Number(id);

    try {
        const res = await axios.post(API._post,
            {
                postId: postId,
                body: body
            })
            .then(res => res.data);

        dispatch(dispatchCreateComment(res));
    } catch (e) {
        error()
    }
};

export const dispatchCreateComment = (newComment) => ({
    type: type.NEW_COMMENT,
    newComment
});
