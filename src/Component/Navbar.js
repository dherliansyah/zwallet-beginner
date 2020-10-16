import React from "react";
import "./style.css";
import { Container, Row, Col, NavLink } from "react-bootstrap";
import {  Switch, Route, Link } from "react-router-dom";
import grid from "./asset/grid.svg";
import arrowUp from "./asset/arrow-up.svg";
import plus from "./asset/plus.svg";
import user from "./asset/user.svg";
import logout from "./asset/log-out.svg";
import { Search } from "../Search";
import { Topup } from "../Topup";
import { Home } from "../Home";
import { History } from "../History";
import { Amount } from "../Amount";
import { Confirmation } from "../Confirmation";
import { Profile } from "../Profile";

const Navbar = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={3} md={12} xs={12} className={`bg-white border-box`} > 
              <div className="h-dashboard-in">
                <NavLink>
                  <img
                    className="h-img-dashboard img-fluid"
                    src={grid}
                    alt="icon"
                  />
                  <Link className="h-dashboard" to="/">
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
                    src={logout}
                    alt="icon"
                  />
                  <Link className="h-dashboard" to="/">
                    Logout
                  </Link>
                </NavLink>
              </div>
          </Col>
          <Col lg={9} md={12} xs={12}>
            <div className={`side-right`}>
              <Switch>
                <Route
                  path="/search"
                  render={(props) => <Search {...props} />}
                />
                <Route path="/topup" render={(props) => <Topup {...props} />} />
                <Route
                  path="/history"
                  render={(props) => <History {...props} />}
                />
                <Route
                  path="/amount"
                  render={(props) => <Amount {...props} />}
                />
                <Route
                  path="/confirmation"
                  render={(props) => <Confirmation {...props} />}
                />

                <Route
                  path="/profile"
                  render={(props) => <Profile {...props} />}
                />

                <Route path="/" render={(props) => <Home {...props} />} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Navbar;
