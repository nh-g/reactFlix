//NPM Packages
import { NavLink } from "react-router-dom";
import { FC } from "react";

//Local files
import reactflix from "assets/images/reactflix.png";

const Header: FC = () => {
  return (
    <header id="header">
      <NavLink to="/browse" className="home">
        <img src={reactflix} alt="Home" />
      </NavLink>
    </header>
  );
};
export default Header;
