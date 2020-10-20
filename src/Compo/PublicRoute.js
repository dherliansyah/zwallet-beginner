import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
// import { isLogin } from "../Utils";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { isLogin} = useSelector((state) => state.Auth)
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin && restricted ? (
          <Redirect to="/home" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
