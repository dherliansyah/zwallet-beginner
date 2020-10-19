import React from "react";
import { login } from "../Utils";

const Login = (props) => {
  return (
    <div>
      <h2>Page Login</h2>
      <form onSubmit={() => login()}>
        <label>
          email:
          <input type="text" name="email" />
        </label>
        <label>
          password:
          <input type="text" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

// import React, { Component } from "react";
// // import { login } from "../Utils";
// import Axios from "axios";

// export default class Login extends Component {
//   login = (e) => {
//     e.preventDefault();

//     const data = {
//       email: this.email,
//       password: this.password,
//     };

//     Axios.post("http://localhost:8000/api/v1/auth/login", data)
//       .then((res) => {
//         localStorage.setItem("token", res.token);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <h2>Page Login</h2>
//         <form onSubmit={this.login}>
//           <label>
//             email:
//             <input
//               type="text"
//               onChange={(e) => (this.email = e.target.value)}
//             />
//           </label>
//           <label>
//             password:
//             <input
//               type="text"
//               onChange={(e) => (this.password = e.target.value)}
//             />
//           </label>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     );
//   }
// }
