import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { logout } from "../../store/actions/authActions";

function SignedInLinks({ logout }) {
    return (
        <ul className="right">
            <li>
                <NavLink to="/addpost">Create Post</NavLink>
            </li>
            <li>
                <NavLink onClick={logout} to="/">
                    Log Out
                </NavLink>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating"></NavLink>
            </li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
