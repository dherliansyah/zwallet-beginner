import React from "react";
import "./style.css";
import { Container, Row, Col, NavLink } from "react-bootstrap";
import { Switch, Link, useLocation, useHistory } from "react-router-dom";
import grid from "./asset/grid.svg";
import arrowUp from "./asset/arrow-up.svg";
import plus from "./asset/plus.svg";
import user from "./asset/user.svg";
import logOut from "./asset/log-out.svg";
import { Search } from "../Search";
import { Topup } from "../Topup";
import { Home } from "../Home";
import { History } from "../History";
import { Amount } from "../Amount";
import { Confirmation } from "../Confirmation";
import { Profile } from "../Profile";
import { PersonalInfo } from "../PersonalInfo";
import { ChangePassword } from "../ChangePassword";
import { ChangePin } from "../ChangePin";
import { ManagePhone } from "../ManagePhone";
import { Success } from "../Success";
import { LandingPage } from "../LandingPage";
import { Login } from "../Login";
import { PrivateRoute } from "../Compo";
import { PublicRoute } from "../Compo";
import { logout } from "../Utils";

const Nav = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={3} md={12} xs={12} className={`bg-white border-box`}>
            <div className="h-dashboard-in">
              <NavLink>
                <img
                  className="h-img-dashboard img-fluid"
                  src={grid}
                  alt="icon"
                />
                <Link className="h-dashboard" to="/home">
                  Dashboard
                </Link>
              </NavLink>
            </div>
            <div className="h-dashboard-in">
              <NavLink>
                <img
                  className="h-img-dashboard img-fluid"
                  src={arrowUp}
                  alt="icon"
                />
                <Link className="h-dashboard" to="/search">
                  Transfer
                </Link>
              </NavLink>
            </div>
            <div className="h-dashboard-in">
              <NavLink>
                <img
                  className="h-img-dashboard img-fluid"
                  src={plus}
                  alt="icon"
                />
                <Link className="h-dashboard" to="/topup">
                  Top Up
                </Link>
              </NavLink>
            </div>
            <div className="h-dashboard-in">
              <NavLink>
                <img
                  className="h-img-dashboard img-fluid"
                  src={user}
                  alt="icon"
                />
                <Link className="h-dashboard" to="/profile">
                  Profile
                </Link>
              </NavLink>
            </div>
            <div className="h-dashboard-last">
              <NavLink>
                <img
                  className="h-img-dashboard img-fluid"
                  src={logOut}
                  alt="icon"
                />
                <Link
                  className="h-dashboard"
                  to="/login"
                  onClick={() => props.onLogout()}
                >
                  Logout
                </Link>
              </NavLink>
            </div>
          </Col>
          <Col lg={9} md={12} xs={12}>
            <Switch>
              <PrivateRoute component={Search} path="/search" />
              <PrivateRoute component={Home} path="/home" />
              <PrivateRoute component={Topup} path="/topup" />
              <PrivateRoute component={History} path="/history" />
              <PrivateRoute component={Amount} path="/amount" />
              <PrivateRoute component={Confirmation} path="/confirmation" />
              <PrivateRoute component={Profile} path="/profile" />
              <PrivateRoute component={PersonalInfo} path="/personal_info" />
              <PrivateRoute
                component={ChangePassword}
                path="/change_password"
              />
              <PrivateRoute component={ChangePin} path="/change_pin" />
              <PrivateRoute component={ManagePhone} path="/manage_phone" />
              <PrivateRoute component={Success} path="/success" />
              <PublicRoute component={Login} restricted={true} path="/login" />
              <PublicRoute
                component={LandingPage}
                restricted={false}
                path="/"
              />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const Navbar = (props) => {
  let location = useLocation();
  let history = useHistory();

  const onLogout = () => {
    logout();
    history.replace("/login");
  };
  return <Nav location={location} onLogout={onLogout} />;
};

export default Navbar;
