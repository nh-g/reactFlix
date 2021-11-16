//NPM Packages
import { NavLink } from "react-router-dom";

//Local files
import Logo from "assets/images/reactflix.png";

const Header = () => {
  return (
    <header id="header">
      <NavLink to="/" className="to_home">
        <img src={Logo} alt="Home" />
      </NavLink>
    </header>
  );
};
export default Header;
