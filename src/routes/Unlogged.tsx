//@ts-nocheck
import { Route } from "react-router-dom";

// Project files
import Login from "components/authentication/Login";
import SignUp from "components/authentication/Signup";
import Recover from "components/authentication/Recover";
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
