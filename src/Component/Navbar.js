import React from "react";
import "./style.css";
import { Col, NavLink } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import grid from "./asset/grid.svg";
import arrowUp from "./asset/arrow-up.svg";
import plus from "./asset/plus.svg";
import user from "./asset/user.svg";
import logOut from "./asset/log-out.svg";
// import { logout } from "../Utils";
import { AuthLogout } from "../redux/actions/Auth";
import { useDispatch } from "react-redux";

const Nav = (props) => {
  return (
    <>
      <Col lg={3} md={12} xs={12} className={`bg-white border-box`}>
        <div className="h-dashboard-in">
          <NavLink>
            <img className="h-img-dashboard img-fluid" src={grid} alt="icon" />
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
            <img className="h-img-dashboard img-fluid" src={plus} alt="icon" />
            <Link className="h-dashboard" to="/topup">
              Top Up
            </Link>
          </NavLink>
        </div>
        <div className="h-dashboard-in">
          <NavLink>
            <img className="h-img-dashboard img-fluid" src={user} alt="icon" />
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
              
              onClick={() => props.onLogout()}
            >
              Logout
            </Link>
          </NavLink>
        </div>
      </Col>
    </>
  );
};

const Navbar = (props) => {
  let location = useLocation();
  let history = useHistory();
  const dispatch = useDispatch() 

  const onLogout = () => {
    dispatch(AuthLogout())
    history.replace("/login");
  };
  return <Nav location={location} onLogout={onLogout} />;
};

export default Navbar;
