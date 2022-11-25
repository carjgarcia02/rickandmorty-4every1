import { Link } from "react-router-dom";
import RickMortyLogo from "../assets/images/Rick_and_Morty.svg";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img className="nav___logo-img" src={RickMortyLogo} alt="Rick and Morty logo" />
      </div>
      <div className="nav__links">
        <Link to="/characters">Characters</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/episodes">Episodes</Link>
      </div>
    </div>
  );
};

export default Navbar;
