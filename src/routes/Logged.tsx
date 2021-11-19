// NPM packages
import { Route, Redirect } from "react-router-dom";

// Project files
import { useAuth } from "state/AuthProvider";
import {
  ROUTE_BROWSE,
  ROUTE_SEARCH,
  ROUTE_FILTER,
  ROUTE_ADMIN,
  ROUTE_PROFILE,
} from "constants/routes";

import Browse from "pages/browse";
import NavBar from "components/shared/NavBar";
import AdminDashboard from "pages/admin";
import SearchPage from "pages/search";
import FilteredPage from "pages/filted-by-genre";
import MyList from "pages/myList";
import Profile from "pages/profile";

export default function Logged() {
  const { user } = useAuth();

  return (
    <>
      <NavBar />
      {user.role === "admin" && (
        <Route path={ROUTE_ADMIN} component={AdminDashboard} />
      )}

      <Route exact path={ROUTE_BROWSE} component={Browse} />

      <Route path={`${ROUTE_BROWSE}/myList`} component={MyList} />

      <Route path={ROUTE_PROFILE} component={Profile} />

      <Route path={`${ROUTE_SEARCH}/:query`} component={SearchPage} />
      
      <Route exact path={ROUTE_SEARCH} component={SearchPage} />

      <Route path={`${ROUTE_FILTER}/:genreName`} component={FilteredPage} />

      <Redirect to={ROUTE_BROWSE} />
    </>
  );
}
