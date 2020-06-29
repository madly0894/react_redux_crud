import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {bindActionCreators} from "redux";
import {post_createPost, put_updatePost} from "../redux/actions/postAction";

function Page({post_createPost, put_updatePost, history, location}) {

    const {id} = useParams();

    const [state, setState] = useState({
        title: "",
        body: "",
        disabled: true
    });

    function handleChange(val, key) {
        setState({
            ...state,
            [key]: val
        });
    }

    let repl = state.body && state.title;
    
    repl.replace(/^\s+|\s+$|\s+(?=\s)/g, "");

    function handleCreatePost() {
        if(location.pathname === "/create") {
            post_createPost(state.title, state.body);
            history.push("/");
        } else {
            put_updatePost(state.title, state.body, id);
            history.push("/");
        }
    }

    useEffect(() => {
        if(repl) {
            setState(state => ({
                ...state,
                disabled: false
            }));
        } else {
            setState(state => ({
                ...state,
                disabled: true
            }));
        }
    }, [repl]);

    return (
        <div className="container vh-100 d-flex align-items-center">
            <form className="form-page text-center">
                <h1 className="h3 mb-3 font-weight-normal">
                    {location.pathname === "/create" ? "Create post" : "Update post: " + id}
                </h1>
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
                    disabled={state.disabled}
                >
                    {location.pathname === "/create" ? "Create post" : "Update post"}
                </button>
            </form>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        post_createPost: bindActionCreators(post_createPost, dispatch),
        put_updatePost: bindActionCreators(put_updatePost, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(Page);
