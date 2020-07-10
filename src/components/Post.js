import React, {useEffect, useState, useRef} from 'react';
import {get_onePost, post_createComment} from "../redux/actions/postAction";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import blogImage from "../images/blog.jpg";
import {getPost} from "../redux/selectors";

function Post({get_onePost, post, post_createComment}) {

    const {id} = useParams();

    const ref = useRef();

    const [data, setData] = useState({
        body: "",
        disabled: true
    });

    function handleChange(e) {
        setData({
            ...data,
            body: e.target.value
        })
    }

    function handleCreateComment() {
        post_createComment(id, data.body);
        setData({
            ...data,
            body: ""
        });
    }

    let repl = data.body.replace(/^\s+|\s+$|\s+(?=\s)/g, "");

    function handleOnMouseEnter(e) {
        if(e.key === "Enter") {
            if(repl) {
                post_createComment(id, data.body);
                ref.current.blur();
                setData({
                    ...data,
                    body: ""
                });
            } else {
                ref.current.blur();
            }
        }
    }

    useEffect(() => {
        get_onePost(id)
    }, [get_onePost, id]);

    useEffect(() => {
        if(repl) {
            setData(state => ({
                ...state,
                disabled: false
            }));
        } else {
            setData(state => ({
                ...state,
                disabled: true
            }));
        }
    }, [repl]);

    return (
        <main role="main">

            <section className="jumbotron text-center mb-0">
                <div className="container">
                    <h1>Post {post && post.id}</h1>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-lg-4 col-10 ml-auto mr-auto" key={post && post.id}>
                            <div className="card mb-4 shadow-sm">
                                <img src={blogImage} alt="" style={{width: "100%", height: "250px"}}/>
                                <div className="card-body">
                                    <h5 className="card-title">{post && post.title}</h5>
                                    <p className="card-text">{post && post.body}</p>
                                </div>
                                <div className="card-footer">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea1">Comments</label>
                                            <textarea
                                                className="form-control"
                                                id="exampleFormControlTextarea1"
                                                rows="2"
                                                ref={ref}
                                                onChange={handleChange}
                                                onKeyPress={handleOnMouseEnter}
                                                value={data.body}
                                            />
                                        </div>
                                        <div className="mb-3 d-flex justify-content-end">
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-sm"
                                                onClick={handleCreateComment}
                                                disabled={data.disabled}
                                            >
                                                Send
                                            </button>
                                        </div>
                                        <ul className="list-group">
                                            {
                                                post && post.comments.map(comment => {
                                                    return (
                                                        <li key={comment.id} className="list-group-item">
                                                            {comment.body}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}

function mapStateToProps(state) {
    return {
        post: getPost(state)
    }
}

export default connect(mapStateToProps, {get_onePost, post_createComment})(Post);
