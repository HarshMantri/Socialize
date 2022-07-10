import React, { useEffect } from "react";
import { connect } from "react-redux";

import Post from "./Post";
import { getPosts } from "../../store/actions/postActions";

function Posts({ posts, getPosts }) {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return (
        <div className="feed-posts section">
            {posts &&
                posts.map((post) => {
                    return <Post post={post} key={post._id} />;
                })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        posts: state.post.posts,
    };
};

const matchDispatchToProps = (dispatch) => {
    return {
        getPosts: () => dispatch(getPosts()),
    };
};

export default connect(mapStateToProps, matchDispatchToProps)(Posts);
