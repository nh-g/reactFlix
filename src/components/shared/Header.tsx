//NPM Packages
import { NavLink } from "react-router-dom";
import { FC } from "react";

//Local files
import reactflix from "assets/img/reactflix.png";

const Header: FC = () => {
  return (
    <header id="header">
      <NavLink to="/" className="home">
        <img src={reactflix} alt="Home" />
      </NavLink>
    </header>
  );
};
export default Header;
