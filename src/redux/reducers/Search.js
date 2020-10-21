const initialState = {
    data : [],
    loading : false,
}

const Search = (state = initialState, action = {}) =>{
    switch (action.type){
        case "SEARCH_REQUEST":
            return{
                ...state,
                loading: true,
            };
        case "SEARCH_SUCCESS":
            return{
                ...state,
                loading: false,
                data : action.payload,
            };
        case "SEARCH_ERROR":
            return{
                ...state,
                loading: false,
                isLogin: false,
                data: [],
                error: action.payload,
            };
        default:
            return state;
    }
}

export default Search;