export const login = (user) => {
    return (dispatch, getState) => {
        const { username, password } = user;
        fetch("http://localhost:8080/api/v1/auth/login", {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((res) => res.json())
            .then((json) => {
                if (json.success) {
                    dispatch({ type: "LOGIN", json });
                } else {
                    dispatch({ type: "ERR_LOGIN", json });
                }
            });
    };
};

export const signup = (user) => {
    return (dispatch, getState) => {
        const { username, password, email, firstName, lastName } = user;

        fetch("http://localhost:8080/api/v1/auth/register", {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
                email,
                firstName,
                lastName,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((res) => res.json())
            .then((json) => {
                dispatch({ type: "SIGNUP", json });
            });
    };
};

export const updateUser = () => {
    return (dispatch, getState) => {
        dispatch({ type: "UPDATE_USER" });
    };
};

export const logout = () => {
    return (dispatch, getState) => {
        dispatch({ type: "LOGOUT" });
    };
};
