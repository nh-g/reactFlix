//@ts-nocheck
import { Route } from "react-router-dom";

// Project files
import Login from "pages/authentication/Login";
import SignUp from "pages/authentication/Signup";
import Recover from "pages/authentication/Recover";
import Header from "components/shared/Header";

export default function Unlogged() {
  return (
    <>
      <Header />
      <Route component={Login} exact path="/" />
      <Route component={SignUp} path="/signup" />
      <Route component={Recover} path="/recover" />
    </>
  );
}
