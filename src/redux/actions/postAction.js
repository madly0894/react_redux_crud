import axios from "axios";
import {API} from "../../constants";
import * as type from "../types";

export const get_listAllPosts = () => async (dispatch) => {
    try {
        const res = await axios.get(API._get)
            .then(res => res.data);

        dispatch(dispatchListAllPosts(res));
    } catch (e) {
        new Error("Error from server");
    }
};

export const dispatchListAllPosts = (posts) => ({
    type: type.GET_POSTS,
    posts
});

export const post_createPost = (title, body) => async (dispatch) => {
    try {
        const res = await axios.post(API._get,
            {
                title: title,
                body: body
            }).then(res => res.data);

        dispatch(dispatchCreatePost(res));
    } catch (e) {
        new Error("Error from server");
    }
};

export const dispatchCreatePost = (post) => ({
    type: type.GET_POST,
    post
});