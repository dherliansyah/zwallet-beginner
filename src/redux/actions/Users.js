import Axios from "axios";
// import { useHistory } from "react-router-dom";

const UsersRequest = () => {
  return {
    type: "USERS_REQUEST",
  };
};

const UsersSuccess = (data) => {
  return {
    type: "USERS_SUCCESS",
    payload: data,
  };
};
const UsersError = (error) => {
  return {
    type: "USERS_ERROR",
    payload: error,
  };
};

export const GetUsers = (fields) => {
  // const history = useHistory()
  return (dispatch) => {
    dispatch(UsersRequest());
    return Axios({
      method: "GET",
    //   data: fields,
      url: `http://localhost:8000/api/v1/user/${fields.idUser}`,

      headers:{
          'auth-token' : fields.token
      }
    })
      .then((res) => {
        const data = res.data.data;
        // console.log(data, "oyyyyyyyyyyyyyyyyyyyy", fields.)
        dispatch(UsersSuccess(data));
        // fields.replace('/home')
      })
      .catch((err) => {
        const message = err.response.data.message;
        dispatch(UsersError(message));
      });
  };
};

