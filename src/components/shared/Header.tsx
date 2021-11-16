//NPM Packages
import { NavLink } from "react-router-dom";
import { FC } from "react";
import Logo from "components/Logo/Logo"
//Local files
import reactflix from "assets/images/reactflix.png";

const Header: FC = () => {
  return (
    <header id="header">
      <NavLink to="/browse" className="home">
        <Logo/>
        {/* <img src={reactflix} alt="Home" /> */}
      </NavLink>
    </header>
  );
};
export default Header;
