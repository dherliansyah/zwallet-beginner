import React from "react";
import { login } from "../Utils";

const Login = (props) => {
  return (
    <div>
      <h2>Page Login</h2>
      <form onSubmit={()=> login()}>
          <label>
              email:
            <input type="text" name="email"/>
          </label>
          <label>
              password:
            <input type="text" name="password"/>
          </label>
          <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
