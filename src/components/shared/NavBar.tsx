// NPM packages
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Project files
import Logo from "assets/images/reactflix.png";
import Actions from "./Actions";
import {
  ROUTE_BROWSE,
  ROUTE_FILTER,
} from "constants/routes";

const NavBar = () => {
  const [showBackground, setShowBackground] = useState(0);

  const handleScroll = () => setShowBackground(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={showBackground === 0 ? "header-menu" : "header-menu black"}
    >
      <div className="block">
        <NavLink to="/browse" className="browse">
          <img src={Logo} alt="Home" />
        </NavLink>

        <nav>
          <NavLink to={ROUTE_BROWSE} className="nav-item">
            Home
          </NavLink>
          <NavLink to={`${ROUTE_FILTER}/series`} className="nav-item">
            Series
          </NavLink>
          <NavLink to={`${ROUTE_FILTER}/film`} className="nav-item">
            Films
          </NavLink>
          <NavLink to={`${ROUTE_FILTER}/documentary`} className="nav-item">
            Documentaries
          </NavLink>
          <NavLink to={`${ROUTE_BROWSE}/myList`} className="nav-item">
            My List
          </NavLink>
        </nav>
      </div>
      <Actions />
    </header>
  );
};
export default NavBar;
