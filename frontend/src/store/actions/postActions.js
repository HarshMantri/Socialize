export const addPost = (post) => {
    return (dispatch, getState) => {
        const { title, content } = post;
        const token = localStorage.getItem("token");
        if (!token) {
            dispatch({ type: "ERR_ADD_POST", error: "unauthorized" });
        }
        fetch("http://localhost:8080/api/v1/post", {
            method: "POST",
            body: JSON.stringify({
                title,
                content,
                authorID: "62cb02107db1b34146bdc484",
                authorFirstName: "Cheesy",
                authorLastName: "Hypocrisy",
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "x-access-token": token,
            },
        })
            .then((res) => res.json())
            .then((json) => {
                if (json.success === true) {
                    dispatch({ type: "ADD_POST", json });
                } else {
                    dispatch({ type: "ERR_ADD_POST", json });
                }
            })
            .catch((error) => {
                dispatch({ type: "ERR_ADD_POST", error });
            });
    };
};

export const getPosts = () => {
    return (dispatch, getState) => {
        const token = localStorage.getItem("token");
        if (!token) {
            dispatch({ type: "ERR_ADD_POST", error: "unauthorized" });
        }
        fetch("http://localhost:8080/api/v1/post", {
            headers: {
                "x-access-token": token,
            },
        })
            .then((res) => res.json())
            .then((json) => {
                dispatch({ type: "UPDATE_POSTS", json });
            });
    };
};

export const getPost = (id) => {
    return (dispatch, getState) => {
        const token = localStorage.getItem("token");
        if (!token) {
            dispatch({ type: "ERR_ADD_POST", error: "unauthorized" });
        }
        fetch(`http://localhost:8080/api/v1/post/${id}`, {
            headers: {
                "x-access-token": token,
            },
        })
            .then((res) => res.json())
            .then((json) => {
                dispatch({ type: "POST_DETAIL", id, json });
            });
    };
};
