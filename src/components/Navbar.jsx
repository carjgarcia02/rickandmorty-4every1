// Links from React-Router
import { NavLink } from "react-router-dom";
// Navbar logo
import RickMortyLogo from "../assets/images/Rick_and_Morty.svg";
// Icons
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
// Hooks
import { useState } from "react";
import { useContext } from "react";
import { rickMortyContext } from "../context/rickMortyContext";
//Dark Mode
import DarkModeBtn from "./DarkModeBtn";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [open, setOpen] = useState("");
  const { setCharacter, setEpisode, setLocation } =
    useContext(rickMortyContext);

  const handleHamburgerMenu = () => {
    if (isClicked === false) {
      setIsClicked(true);
      setOpen("open");
    } else {
      setIsClicked(false);
      setOpen("");
    }
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar__logo">
          <a
            href="https://en.wikipedia.org/wiki/Rick_and_Morty"
            target="_blank"
          >
            <img
              className="navbar__image"
              src={RickMortyLogo}
              alt="Rick and Morty logo"
            />
          </a>
        </div>
        <ul className="navbar__links">
          <li>
            <NavLink to="/results" onClick={() => setCharacter()}>
              Characters
            </NavLink>
          </li>
          <li onClick={() => setLocation()}>
            <NavLink to="/results">Locations</NavLink>
          </li>
          <li onClick={() => setEpisode()}>
            <NavLink to="/results">Episodes</NavLink>
          </li>
        </ul>
        <DarkModeBtn />
        <a
          href="https://www.adultswim.com/videos/rick-and-morty"
          className="actionBtn"
        >
          Watch Online
        </a>
        <div className="navbar__toggleBtn">
          <i>
            {isClicked ? (
              <AiOutlineClose onClick={handleHamburgerMenu} />
            ) : (
              <FiMenu onClick={handleHamburgerMenu} />
            )}
          </i>
        </div>
      </nav>

      <div className={`dropdown_menu ${open}`}>
        <li>
          <NavLink to="/characters">Characters</NavLink>
        </li>
        <li>
          <NavLink to="/locations">Locations</NavLink>
        </li>
        <li>
          <NavLink to="/episodes">Episodes</NavLink>
        </li>
        <a
          href="https://www.adultswim.com/videos/rick-and-morty"
          className="actionBtn"
        >
          Watch Online
        </a>
      </div>
    </header>
  );
};

export default Navbar;
