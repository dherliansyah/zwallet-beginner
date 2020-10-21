import Axios from "axios"

const SearchRequest = () =>{
    return{
        type : "SEARCH_REQUEST",
    }
}

const SearchSuccess = (data) =>{
    return{
        type : "SEARCH_SUCCESS",
        payload : data,
    }
}

const SearchError = (error) =>{
    return{
        type : "SEARCH_ERROR",
        payload : error,
    }
}

export const SearchUser = (fields) =>{
    return(dispatch) =>{
        dispatch(SearchRequest());
        return Axios({
            method : "GET",
            data : fields,
            url : "http://localhost:8000/api/v1/user",
            headers:{
                'auth-token' : fields.token
            }
        })
        .then((res) =>{
            const data = res.data.data;
            dispatch(SearchSuccess(data))
        })
        .catch((err)=>{
            const message = err.response.data.message
            dispatch(SearchError(message))
        })
    }
}