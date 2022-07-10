const initState = {
    posts: [],
    currentPost: null,
};

const postReducer = (state = initState, action) => {
    if (action.type === "ADD_POST") {
        return {
            ...state,
            posts: [action.json.post, ...state.posts],
        };
    }
    if (action.type === "ERR_ADD_POST") {
        if (action.error) {
            console.log(`error adding post: ${action.error}`);
        }
        if (action.json) {
            console.log(`error adding post: ${action.json}`);
        }
    }
    if (action.type === "UPDATE_POSTS") {
        return {
            ...state,
            posts: action.json.posts,
        };
    }
    if (action.type === "POST_DETAIL") {
        return {
            ...state,
            currentPost: action.json.post,
        };
    }
    return state;
};

export default postReducer;
