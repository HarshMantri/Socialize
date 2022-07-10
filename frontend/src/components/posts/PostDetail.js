import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

import { getPost } from "../../store/actions/postActions";

function PostDetail({ getPost, post }) {
    const { id } = useParams();

    useEffect(() => {
        getPost(id);
    }, [getPost, id]);

    return (
        <div className="container section expanded-post">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        {post ? post.title : "loading..."}
                    </span>
                    {post &&
                        post.content.split("\n").map((line, idx) => {
                            return <p key={idx}>{line}</p>;
                        })}
                </div>
                <div className="card-action grey-text">
                    {post && (
                        <div>
                            Posted by {post.authorFirstName || "anonymous"}{" "}
                            {post.authorLastName || ""}
                        </div>
                    )}
                    <div>{post && moment(post.createdAt).calendar()}</div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        post: state.post.currentPost,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPost: (id) => dispatch(getPost(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
