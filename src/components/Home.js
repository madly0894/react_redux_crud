import React, {useEffect} from 'react';
import blogImage from "../images/blog.jpg";
import {connect} from "react-redux";
import {del_deletePost, get_listAllPosts} from "../redux/actions/postAction";
import {getPosts} from "../redux/selectors";

function Home({posts, get_listAllPosts, del_deletePost, history}) {

    useEffect(() => {
        get_listAllPosts()
    }, [get_listAllPosts]);

    function handleDeletePost(id) {
        const remove = window.confirm("Are you sure delete the post: " + id);
        if(remove) {
            del_deletePost(id)
        }
    }

    return (
        <main role="main">

            <section className="jumbotron text-center mb-0">
                <div className="container">
                    <h1>Blog</h1>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        {
                            posts && posts.map(post => {
                                return (
                                    <div className="col-md-4" key={post.id}>
                                        <div className="card mb-4 shadow-sm">
                                            <img src={blogImage} alt="" style={{width: "100%", height: "250px"}}/>
                                            <div className="card-body">
                                                <h5 className="card-title" style={{height: "50px"}}>{post.title}</h5>
                                                <p className="card-text" style={{height: "150px", overflow: "auto"}}>{post.body}</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-outline-success"
                                                            onClick={() => history.push(`/post/${post.id}`)}
                                                        >View
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-outline-primary"
                                                            onClick={() => history.push(`/edit/${post.id}`)}
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-outline-danger"
                                                            onClick={() => handleDeletePost(post.id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </main>
    );
}

function mapStateToProps(state) {
    return {
        posts: getPosts(state),
        // posts: state.data && state.data.posts  2 - ой способ
    }
}

export default connect(mapStateToProps, {get_listAllPosts, del_deletePost})(Home);
