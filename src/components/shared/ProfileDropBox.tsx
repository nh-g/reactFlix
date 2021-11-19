// NPM packages
import { NavLink, useHistory } from "react-router-dom";

// Project files
import avatar from "assets/images/avatar.png";
import arrowDown from "assets/icon/droparrow.svg";
import { useAuth } from "state/AuthProvider";
import SearchBar from "./SearchBar";

export default function ProfileDropBox() {
  // Global state
  const { user, setLoggedIn } = useAuth();
  const history = useHistory();

  return (
    <div className="actions">
      <SearchBar />

      <div className="dropdown">
        <img src={avatar} alt="" />
        <img className="drop-arrow" src={arrowDown} alt="" />

        <div className="caret">
          <img src={arrowDown} alt="" />
          <NavLink to="/profile">
            <p>{user.username}</p>
          </NavLink>
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
}
