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
import { AdmHome } from "./AdmHome";
import { PrivateRoute } from "./Compo";
import { PublicRoute } from "./Compo";
import { Provider, useSelector } from "react-redux";
import  configureStore  from "../src/redux/store";
import  {PersistGate}  from "redux-persist/integration/react";

const RoutesPublic = () => {
  return(
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
        <PublicRoute component={LandingPage} restricted={false} path="/" exact />
      </Switch>
    </Router>
  )
}

const RoutesAdmin = () => {
  return (
    <>
      <>
        <PrivateRoute exact path="/ngademin" component={AdmHome} />
      </>
    </>
  );
}

const Routes = () => {
  const Auth = useSelector((s) => s.Auth);
  return (
    <Router>
      {Auth?.data?.user?.role === "admin" ? (<>
        <RoutesAdmin />
        <RoutesPublic />
      </>) : (
        <>
          <RoutesPublic />
        </>
      )}
    </Router>
  );
};


const App = () => {
  const { store, persistor } = configureStore()
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
         <Routes />
       </PersistGate>
    </Provider>
  );
}

export default App;
