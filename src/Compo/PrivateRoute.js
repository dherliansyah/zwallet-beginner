import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
// import { isLogin } from "../Utils";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLogin} = useSelector((state) => state.Auth)

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
