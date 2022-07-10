import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addPost } from "../../store/actions/postActions";

function AddPost({ addPost }) {
    const [values, setValues] = useState({
        title: "",
        content: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setValues((prevValues) => {
            return {
                ...prevValues,
                [e.target.id]: e.target.value,
            };
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(values);
        navigate("/");
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Add Post</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        onChange={handleChange}
                        value={values.title}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        className="materialize-textarea"
                        onChange={handleChange}
                        value={values.content}
                    />
                </div>
                <div className="input-field">
                    <button className="btn z-depth-0">Post</button>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => dispatch(addPost(post)),
    };
};

export default connect(null, mapDispatchToProps)(AddPost);
