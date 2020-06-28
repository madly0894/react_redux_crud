import React, {useEffect} from 'react';
import blogImage from "../images/blog.jpg";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {get_listAllPosts} from "../redux/actions/postAction";

function Home({posts, get_listAllPosts}) {

    useEffect(() => {
        get_listAllPosts()
    }, [get_listAllPosts]);

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
                                                <h5 className="card-title">{post.title}</h5>
                                                <p className="card-text">{post.body}</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-sm btn-outline-success">View
                                                        </button>
                                                        <button type="button" className="btn btn-sm btn-outline-primary">Edit
                                                        </button>
                                                        <button type="button" className="btn btn-sm btn-outline-danger">Delete
                                                        </button>
                                                    </div>
                                                    <small className="text-muted">9 mins</small>
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
        posts: state.data && state.data.posts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        get_listAllPosts: bindActionCreators(get_listAllPosts, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);