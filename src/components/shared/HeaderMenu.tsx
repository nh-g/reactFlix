//NPM Packages
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

//Local files
import Logo from "assets/images/reactflix.png";
import Actions from "./Actions";

const HeaderMenu = () => {
  // Local state
  const [showBackground, setShowBackground] = useState(0);

  //Methods
  const handleScroll = () => setShowBackground(window.pageYOffset);
  // Hook
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
          <NavLink to="/browse" className="nav-item">
            Home
          </NavLink>
          <NavLink to="/category/serie" className="nav-item">
            Series
          </NavLink>{" "}
          <NavLink to="/category/film" className="nav-item">
            Films
          </NavLink>
          <NavLink to="/category/documentary" className="nav-item">
            Documentaries
          </NavLink>
        </nav>
      </div>
      <Actions />
    </header>
  );
};
export default HeaderMenu;
