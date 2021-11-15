//NPM Packages
import { useState, useEffect, FC } from "react";
import { NavLink } from "react-router-dom";

//Local files
import reactflix from "assets/img/reactflix.png";

import Actions from "./Actions";

const HeaderMenu: FC = () => {
  // Local state
  const [scrollPosition, setScrollPosition] = useState(0);

  //Methods
  const handleScroll = () => setScrollPosition(window.pageYOffset);
  // Hook
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={scrollPosition === 0 ? "header-menu" : "header-menu black"}
    >
      <div className="bloc">
        <NavLink to="/" className="home">
          <img src={reactflix} alt="Home" />
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
