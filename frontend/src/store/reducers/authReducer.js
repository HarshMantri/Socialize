const initState = {
    user: null,
};

const authReducer = (state = initState, action) => {
    if (action.type === "LOGIN") {
        localStorage.setItem("token", action.json.jwt);
        return {
            ...state,
            user: action.json.jwt,
        };
    }
    if (action.type === "SIGNUP") {
        localStorage.setItem("token", action.json.jwt);
        return {
            ...state,
            user: action.json.jwt,
        };
    }
    if (action.type === "UPDATE_USER") {
        const token = localStorage.getItem("token");
        if (token) {
            return {
                ...state,
                user: token,
            };
        }
    }
    if (action.type === "LOGOUT") {
        localStorage.removeItem("token");
        return {
            ...state,
            user: null,
        };
    }
    return state;
};

export default authReducer;
