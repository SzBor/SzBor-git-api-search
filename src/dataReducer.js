const dataReducer = (state, action) => {
    switch (action.type) {
        case "GET_REPOS_REQUEST":
            return {
                ...state,
                error: "",
            };
        case "GET_REPOS_SUCCESS":
            return {
                ...state,
                repos: action.payload,
            };
        case "GET_REPOS_FAILURE":
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};


export default dataReducer;