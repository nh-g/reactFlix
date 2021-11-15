//@ts-nocheck
import { Route } from "react-router-dom";

// Project files
import { useAuth } from "state/AuthProvider";
import Browse from "pages/browse";
import Login from "pages/authentication/Login";
import SignUp from "pages/authentication/Signup";
import HeaderMenu from "components/shared/HeaderMenu";
import Admin from "pages/admin/Admin";
import Search from "pages/search";
import Genre from "pages/genre";

export default function Logged() {
  const { user } = useAuth();

  return (
    <>
      <HeaderMenu />
      <Route exact path="/browse" component={Browse} />
      <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signup" />
      <Route component={Search} exact path="/search/" />
      <Route component={Search} path="/search/:query" />
      <Route component={Genre} path="/category/:category" />
      {user.role === "admin" && <Route component={Admin} path="/admin" />}
    </>
  );
}
