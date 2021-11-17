// NPM packages
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Project files
import Footer from "components/shared/Footer";
import {
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_SIGNUP,
  ROUTE_BROWSE,
  ROUTE_SEARCH,
  ROUTE_FILTER,
  ROUTE_RESET,
  ROUTE_ADMIN,
} from "constants/routes";

import Login from "pages/authentication/Login";
import SignUp from "pages/authentication/Signup";
import Reset from "pages/authentication/Reset";
import LandingPage from "pages/landing/Home";

import Browse from "pages/browse";
import Admin from "pages/admin/Admin";
import Search from "pages/search";
import Genre from "pages/genre";

interface iProps{
    loggedIn: boolean
}
export default function Browser({ loggedIn }: iProps) {
    console.log("loggedIn", loggedIn);
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTE_LOGIN}>
          {!loggedIn ? <Login /> : <Redirect to={ROUTE_BROWSE} />}
        </Route>
        <Route path={ROUTE_SIGNUP}>
          {!loggedIn ? <SignUp /> : <Redirect to={ROUTE_BROWSE} />}
        </Route>
        <Route path={ROUTE_RESET}>
          {!loggedIn ? <Reset /> : <Redirect to={ROUTE_BROWSE} />}
        </Route>

        <Route path={ROUTE_HOME}>
          {!loggedIn ? <LandingPage /> : <Redirect to={ROUTE_BROWSE} />}
        </Route>
        <Route path={ROUTE_BROWSE}>
          {loggedIn ? <Browse /> : <Redirect to={ROUTE_HOME} />}
        </Route>
        <Route path={ROUTE_SEARCH}>
          {loggedIn ? <Search /> : <Redirect to={ROUTE_HOME} />}
        </Route>
        <Route path={ROUTE_FILTER}>
          {loggedIn ? <Genre /> : <Redirect to={ROUTE_HOME} />}
        </Route>
        <Route path={ROUTE_ADMIN}>
          {loggedIn ? <Admin /> : <Redirect to={ROUTE_HOME} />}
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
