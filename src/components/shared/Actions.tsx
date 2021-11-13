//NPM Packages
import { NavLink, useHistory } from "react-router-dom";
import { FC } from "react";

//Local Files
import face from "assets/icns/face.png";
import droparrow from "assets/icns/droparrow.svg";
import { useAuth } from "state/AuthProvider";
import SearchBar from "./SearchBar";

const Actions: FC = () => {
  // Global state
  //@ts-ignore
  const { user, setLoggedIn } = useAuth();
  const history = useHistory();

  return (
    <div className="actions">
      <SearchBar />

      <div className="dropdown">
        <img src={face} alt="" />
        <img className="drop-arrow" src={droparrow} alt="" />

        <div className="caret">
          <img src={droparrow} alt="" />
          <p>{user.username}</p>
          {user.role === "admin" && <NavLink to="/admin">Editor</NavLink>}

          <button
            onClick={() => {
              setLoggedIn(false);
              localStorage.setItem("uid", "");
              history.push("/");
            }}
          >
            Sign out of reactflix
          </button>
        </div>
      </div>
    </div>
  );
};
export default Actions;
