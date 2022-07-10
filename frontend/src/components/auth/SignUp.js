import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signup } from "../../store/actions/authActions";

function SignUp({ signup }) {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
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
        signup(values);
        navigate("/");
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        onChange={handleChange}
                        value={values.email}
                    />
                </div>
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
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        onChange={handleChange}
                        value={values.firstName}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        onChange={handleChange}
                        value={values.lastName}
                    />
                </div>
                <div className="input-field">
                    <button className="btn z-depth-0">Register</button>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (user) => dispatch(signup(user)),
    };
};

export default connect(null, mapDispatchToProps)(SignUp);
