import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { updateUser } from "../../store/actions/authActions";

function Navbar({ user, updateUser }) {
    useEffect(() => {
        if (!user) {
            updateUser();
        }
    }, [user, updateUser]);

    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">
                    Socialize
                </Link>
                {user ? <SignedInLinks /> : <SignedOutLinks />}
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: () => dispatch(updateUser()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
