// Links from React-Router
import { NavLink } from "react-router-dom";
// Navbar logo
import RickMortyLogo from "../assets/images/Rick_and_Morty.svg";
// Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
// Hooks
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [menuClass, setMenuClass] = useState("hidden");

  const handleHamburger = () => {
    if (isClicked) {
      setMenuClass("");
      setIsClicked(!isClicked);
    } else {
      setMenuClass("hidden");
      setIsClicked(!isClicked);
    }
  };

  useEffect(() => {
    handleHamburger();
  }, []);

  return (
    <nav className="nav">
      <a href="https://en.wikipedia.org/wiki/Rick_and_Morty" target="_blank">
        <img
          className="nav__image"
          src={RickMortyLogo}
          alt="Rick and Morty logo"
        />
      </a>
      <div className={`nav__links ${menuClass}`}>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav__links-nav active" : "nav__links-nav"
          }
          to="/characters"
        >
          Characters
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav__links-nav active" : "nav__links-nav"
          }
          to="/locations"
        >
          Locations
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav__links-nav active" : "nav__links-nav"
          }
          to="/episodes"
        >
          Episodes
        </NavLink>
      </div>

      <div className="nav__hamburger-icon">
        {isClicked ? (
          <GiHamburgerMenu onClick={handleHamburger} />
        ) : (
          <AiOutlineClose onClick={handleHamburger} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
