import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../../store/actions/authActions";

function SignIn({ login }) {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: "",
        password: "",
    });

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
        login(values);
        navigate("/");
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        onChange={handleChange}
                        value={values.username}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={handleChange}
                        value={values.password}
                    />
                </div>
                <div className="input-field">
                    <button className="btn z-depth-0">Login</button>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user)),
    };
};

export default connect(null, mapDispatchToProps)(SignIn);
