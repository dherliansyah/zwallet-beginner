import Axios from "axios";
// import { useHistory } from "react-router-dom";

const AuthLoginRequest = () => {
  return {
    type: "LOGIN_REQUEST",
  };
};

const AuthLoginSuccess = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};
const AuthLoginError = (error) => {
  return {
    type: "LOGIN_ERROR",
    payload: error,
  };
};

export const AuthLogin = (fields) => {
  // const history = useHistory()
  return (dispatch) => {
    dispatch(AuthLoginRequest());
    return Axios({
      method: "POST",
      data: fields,
      url: "http://localhost:8000/api/v1/auth/login",
    })
      .then((res) => {
        const data = res.data;
        dispatch(AuthLoginSuccess(data));
        // fields.replace('/home')
      })
      .catch((err) => {
        const message = err.response.data.message;
        dispatch(AuthLoginError(message));
      });
  };
};

export const AuthLogout = () => {
  return {
    type: "LOGOUT",
  };
};
