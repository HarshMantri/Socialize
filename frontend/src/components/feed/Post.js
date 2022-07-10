import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

function Post({ post }) {
    return (
        <div className="card z-depth-0 feed-post">
            <div className="card-content">
                <span className="card-title">
                    <Link to={`/post/${post._id}`}>{post.title}</Link>
                </span>
                <p>
                    Posted by {post.authorFirstName || "anonymous"}{" "}
                    {post.authorLastName || ""}
                </p>
                <p className="grey-text">{moment(post.createdAt).calendar()}</p>
            </div>
        </div>
    );
}

export default Post;
