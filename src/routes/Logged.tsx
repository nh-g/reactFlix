// NPM packages
import { Route, Redirect } from "react-router-dom";

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
import NavBar from "components/shared/NavBar";
import Admin from "pages/admin/Admin";
import Search from "pages/search";
import Genre from "pages/genre";
import MyList from "pages/myList";

export default function Logged() {
  const { user } = useAuth();

  return (
    <>
      <NavBar />
      {user.role === "admin" && <Route path={ROUTE_ADMIN} component={Admin} />}

      <Route exact path={ROUTE_BROWSE} component={Browse} />
      <Route path={`${ROUTE_BROWSE}/myList`} component={MyList} />

      <Route path={`${ROUTE_SEARCH}/:query`} component={Search} />
      <Route exact path={ROUTE_SEARCH} component={Search} />

      <Route path={`${ROUTE_FILTER}/:genreName`} component={Genre} />

      <Route path={ROUTE_LOGIN} component={Login} />
      <Route path={ROUTE_SIGNUP} component={SignUp} />

      <Redirect to={ROUTE_BROWSE} />
    </>
  );
}
