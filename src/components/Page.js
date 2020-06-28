import React, {useState} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {post_createPost} from "../redux/actions/postAction";

function Page({post_createPost, history}) {

    const [state, setState] = useState({
        title: "",
        body: ""
    });

    function handleChange(val, key) {
        setState({
            ...state,
            [key]: val
        });
    }

    function handleCreatePost() {
        post_createPost(state.title, state.body);
        history.push("/");
    }

    return (
        <div className="container vh-100 d-flex align-items-center">
            <form className="form-page text-center">
                <h1 className="h3 mb-3 font-weight-normal">Create post</h1>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(e) => handleChange(e.target.value, "title")}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Body</label>
                    <textarea
                        rows="3"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(e) => handleChange(e.target.value, "body")}
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleCreatePost}
                >
                    Create Post
                </button>
            </form>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        post_createPost: bindActionCreators(post_createPost, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Page);