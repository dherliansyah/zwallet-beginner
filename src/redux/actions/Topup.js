import Axios from "axios"

const TopupRequest = () =>{
    return{
        type : "TOPUP_REQUEST",
}
}

const TopupSuccess = (data) =>{
    return{
        type : "TOPUP_SUCCESS",
        payload : data,
}
}

const TopupError = (error) =>{
    return{
        type : "TOPUP_ERROR",
        payload : error,
    }
}

export const TopupUser = (fields) =>{
    return(dispatch) =>{
        dispatch(TopupRequest());
        return Axios ({
            method : "GET",
            data : fields,
            url : "http://localhost:8000/api/v1/topup",
            headers : {
                'auth-token' : fields.token
            }
        })
        .then((res) =>{
            const data = res.data.data;
            dispatch(TopupSuccess(data))
        })
        .catch((err) =>{
            const message = err.response.data.message
            dispatch(TopupError(message))
        })
    }
}