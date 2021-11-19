// NPM packages
import { useState } from "react";

// Project files
import { useAuth } from "state/AuthProvider";
import Placeholder from "assets/images/avatar.png";
import EditProfile from "./EditProfile";
import footerLinks from "data/home-footer-links.json";
import { Footer } from "components";

export default function Profile() {
  const { user, setUser } = useAuth();

  const [editing, setEditing] = useState(false);

  const { avatar, username } = user;

  const Avatar =
    avatar === "" || avatar === null || avatar === undefined
      ? Placeholder
      : avatar;

  return (
    <div id="my-list">
      <h1>My Profile</h1>

      <br />
      <main className="page-home">
        <img src={Avatar} alt="user generated content" className="avatar" />
        <br />
        <button className="btn-select" onClick={() => setEditing(!editing)}>
          Edit Profile
        </button>
        <br />
        <h2>Username: {username}</h2>
        {editing && (
          <EditProfile setEditing={setEditing} user={user} setUser= {setUser} />
        )}
      </main>

      <div className="Home__row" id="bigFooter">
        <Footer
          className="Home__footer"
          menuLinks={footerLinks}
          showHotlineNumber
          showLanguagePicker
        >
          <div className="Home__footerSiteName">
            Netflix Clone © 2021 • giangngohong@gmail.com
          </div>
        </Footer>
      </div>
    </div>
  );
}
