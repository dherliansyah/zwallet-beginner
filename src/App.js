import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Search } from "./Search";
import { Topup } from "./Topup";
import { Home } from "./Home";
import { History } from "./History";
import { Amount } from "./Amount";
import { Confirmation } from "./Confirmation";
import { Profile } from "./Profile";
import { PersonalInfo } from "./PersonalInfo";
import { ChangePassword } from "./ChangePassword";
import { ChangePin } from "./ChangePin";
import { ManagePhone } from "./ManagePhone";
import { Success } from "./Success";
import { LandingPage } from "./LandingPage";
import { Login } from "./Login";
import { PrivateRoute } from "./Compo";
import { PublicRoute } from "./Compo";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute component={Search} path="/search" />
        <PrivateRoute component={Home} path="/home" />
        <PrivateRoute component={Topup} path="/topup" />
        <PrivateRoute component={History} path="/history" />
        <PrivateRoute component={Amount} path="/amount" />
        <PrivateRoute component={Confirmation} path="/confirmation" />
        <PrivateRoute component={Profile} path="/profile" />
        <PrivateRoute component={PersonalInfo} path="/personal_info" />
        <PrivateRoute component={ChangePassword} path="/change_password" />
        <PrivateRoute component={ChangePin} path="/change_pin" />
        <PrivateRoute component={ManagePhone} path="/manage_phone" />
        <PrivateRoute component={Success} path="/success" />
        <PublicRoute component={Login} restricted={true} path="/login" />
        <PublicRoute component={LandingPage} restricted={false} path="/" />
      </Switch>
    </Router>
  );
}

export default App;
