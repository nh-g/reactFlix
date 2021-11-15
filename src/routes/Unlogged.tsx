//@ts-nocheck
import { Route } from "react-router-dom";

// Project files
import Login from "pages/authentication/Login";
import SignUp from "pages/authentication/Signup";
import Recover from "pages/authentication/Recover";
import Header from "components/shared/Header";
import LandingPage from  "pages/landing/Home"
export default function Unlogged() {
  return (
    <>
      {/* <Header /> */}
      <Route component={LandingPage} exact path="/" />
      <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signup" />
      <Route component={Recover} path="/recover" />
    </>
  );
}
