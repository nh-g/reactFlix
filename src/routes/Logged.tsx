//@ts-nocheck
import { Route } from "react-router-dom";

// Project files
import { useAuth } from "state/AuthProvider";
import Home from "components/Home/Home";
import Login from "components/authentication/Login";
import SignUp from "components/authentication/Signup";
import HeaderMenu from "components/shared/HeaderMenu";
import Admin from "components/admin/Admin";
import Search from "components/Search/Search";
import Category from "components/Category/Category";

export default function Logged() {
  const { user } = useAuth();

  return (
    <>
      <HeaderMenu />
      <Route exact path="/" component={Home} />
      <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signup" />
      <Route component={Search} exact path="/search/" />
      <Route component={Search} path="/search/:query" />
      <Route component={Category} path="/category/:category" />
      {user.role === "admin" && <Route component={Admin} path="/admin" />}
    </>
  );
}
