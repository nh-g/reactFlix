//@ts-nocheck
//NPM Packages
import { useState, useCallback, useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

//Local Files
import "styles/base.sass";
import { useAuth } from "state/AuthProvider";
import { getDocument } from "scripts/fireStore";
import Logged from "routes/Logged";
import Unlogged from "routes/Unlogged";
import { BoxError, Spinner } from "components/shared/FetchItems";
import footerLinks from "data/home-footer-links.json";
import {Footer} from "components";

export default function App() {
  // Global state
  const { loggedIn, setLoggedIn, setUser } = useAuth();

  //Local state
  const [status, setStatus] = useState(0); // 0 loading, 1 ready, 2 error

  // Methods
  const fetchUser = useCallback(
    async (path) => {
      const uid = localStorage.getItem("uid");
      if (uid) {
        const user = await getDocument(path, uid);
        setUser(user);
        setLoggedIn(true);
      }
      setStatus(1);
    },
    [setUser, setLoggedIn]
  );

  useEffect(() => fetchUser("users"), [fetchUser]);
  // forceRefresh={true} on BrowserRouter to try
  return (
    <div className="App">
      {status === 0 && <Spinner />}
      {status === 2 && <BoxError />}
      {status === 1 && (
        <BrowserRouter>
          <Switch>{loggedIn ? <Logged /> : <Unlogged />}</Switch>
          <div className="Home__row">
            <Footer
              className="Home__footer"
              menuLinks={footerLinks}
              showHotlineNumber
              showLanguagePicker
            >
              <div className="Home__footerSiteName">
                Netflix Clone © 2021 • Giang N.H.
              </div>
            </Footer>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}
