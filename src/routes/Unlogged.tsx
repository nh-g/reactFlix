// NPM packages
import { Route } from "react-router-dom";

// Project files
import {
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_SIGNUP,
  ROUTE_RESET,
} from "constants/routes";
import Login from "pages/authentication/Login";
import SignUp from "pages/authentication/Signup";
import Reset from "pages/authentication/Reset";
import LandingPage from "pages/landing/Home";

export default function UnLogged() {
  return (
    <>
      <Route exact path={ROUTE_HOME} component={LandingPage} />
      <Route path={ROUTE_LOGIN} component={Login} />
      <Route path={ROUTE_SIGNUP} component={SignUp} />
      <Route path={ROUTE_RESET} component={Reset} />
    </>
  );
}
