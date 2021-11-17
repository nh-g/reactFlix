// NPM packages
import { Route } from "react-router-dom";

// Project files
import { useAuth } from "state/AuthProvider";
import {
  ROUTE_LOGIN,
  ROUTE_SIGNUP,
  ROUTE_BROWSE,
  ROUTE_SEARCH,
  ROUTE_FILTER,
  ROUTE_ADMIN,
} from "constants/routes";

import Browse from "pages/browse";
import Login from "pages/authentication/Login";
import SignUp from "pages/authentication/Signup";
import HeaderMenu from "components/shared/HeaderMenu";
import Admin from "pages/admin/Admin";
import Search from "pages/search";
import Genre from "pages/genre";
import Footer from "components/shared/Footer";

export default function Logged() {
  const { user } = useAuth();

  return (
    <>
      <HeaderMenu />
      {/* <Route component={Login} path="/login" /> */}
      {user.role === "admin" && <Route path={ROUTE_ADMIN} component={Admin} />}

      <Route exact path={ROUTE_BROWSE} component={Browse} />

      <Route component={Search} path={`${ROUTE_SEARCH}/:query`} />
      <Route component={Genre} path={`${ROUTE_FILTER}/:genreName`} />

      <Route path={ROUTE_LOGIN} component={Login} />
      <Route path={ROUTE_SIGNUP} component={SignUp} />


      {/* <Route exact path="/browse" component={Browse} /> */}
      {/* <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signup" /> */}
    </>
  );
}
