import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../App";

const DarkModeBtn = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="btn" onClick={toggleTheme}>
      <div className={`btn__indicator ${theme === "dark" ? "darkmode" : ""}`}>
        <div className="btn__icon-container">
          <div className={`btn__icon ${theme === "dark" ? "animated" : ""}`}>
            {theme === "dark" ? (
              <FontAwesomeIcon icon={faMoon} style={{ color: "#FFF" }} />
            ) : (
              <FontAwesomeIcon icon={faSun} style={{ color: "#FFCC00" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkModeBtn;
