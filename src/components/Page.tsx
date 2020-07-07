import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {post_createPost, put_updatePost} from "../redux/actions/postAction";
import * as H from "history";
import {AppStateType} from "../redux/reducers/rootReducers";

type MapStateToPropsType = {

}

type MapDispatchToProps = {
    post_createPost: (title: string, body: string) => void
    put_updatePost: (title: string, body: string, id: number) => void
}

type OwnPropsType = {
    history: H.History
    location: H.Location
}

type PropsType = MapStateToPropsType & MapDispatchToProps & OwnPropsType;

const Page: React.FC<PropsType> = ({post_createPost, put_updatePost, history, location}) => {

    type ParamType = {
        id: string
    }

    const {id} = useParams<ParamType>();

    const initialState = {
        title: "" as string,
        body: "" as string,
        disabled: true as boolean
    };

    type InitialGlobalStateType = typeof initialState;

    const [state, setState] = useState<InitialGlobalStateType>(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: string) => {
        setState({
            ...state,
            [key]: e.target.value
        });
    };

    const handleCreatePost = () => {
        if(location.pathname === "/create") {
            post_createPost(state.title, state.body);
            history.push("/");
        } else {
            put_updatePost(state.title, state.body, +id);
            history.push("/");
        }
    };

    let repl = state.body && state.title;

    repl.replace(/^\s+|\s+$|\s+(?=\s)/g, "");

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
                        onChange={(e) => handleChange(e, "title")}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Body</label>
                    <textarea
                        rows={3}
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(e) => handleChange(e, "body")}
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
};

export default connect<MapStateToPropsType, MapDispatchToProps, OwnPropsType, AppStateType>(null, {post_createPost, put_updatePost})(Page);
