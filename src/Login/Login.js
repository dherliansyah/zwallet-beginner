import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogin } from "../redux/actions/Auth";
import hp from "./asset/hp.svg";
import "./Loginstyle.css";

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.Auth);

  // const{data, isLogin, loading} = useSelector((state) => state.Auth)

  const onSubmit = (e) => {
    e.preventDefault(e);
    dispatch(
      AuthLogin({
        email: email,
        password: password,
        // history: props.history,
      })
    );
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 l-back">
            <div className="l-login-back">
              <p className="l-parap">Zwallet</p>
              <img src={hp} className="img-fluid px-5 l-img" alt="Waiting" />
              <h2 className="l-covering">App that Covering Banking Needs.</h2>
              <p className="l-cut">
                Zwallet is an application that focussing in banking needs for
                all users
                <br />
                in the world. Always updated and always following world trends.
                <br />
                5000+ users registered in Zwallet everyday with worldwide <br />
                users coverage.
              </p>
              {/* <br><br> */}
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 l-head">
            <p className="l-right">
              Start Accesscing Banking Needs With All Devices and All Platforms
              With 30.000+ Users
            </p>
            <p className="l-right-1">
              Transfering money is eassier than ever. you can access Zwallet
              wherever you are. Desktop, laptop, mobile phone? we cover all of
              that for you!
            </p>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <label>Email :</label>
                <input
                  className="form-control email-data"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password :</label>
                <input
                  className="form-control password-data"
                  id="exampleInputPassword1"
                  type="text"
                  name="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <small
                id="emailHelp"
                className="form-text text-muted forgot-password"
              >
                Forgot password?
              </small>

              {loading ? (
                <button type="submit" className="btn btn-secondary l-button btn-lg btn-block" disabled={true}>Loading....</button>
              ):(
                <button
                type="submit"
                className="btn btn-secondary l-button btn-lg btn-block"
              >
                Login
              </button>
              )}

              <p className="l-sign-up">
                Don't have an account? Let's <a href="history.html">Sign Up</a>
              </p>
            </form>
          </div>

      
        </div>
      </div>
    </>
  );
};

export default Login;
