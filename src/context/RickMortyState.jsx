import { useState } from "react";
import { rickMortyContext } from "./rickMortyContext";

const RickMortyState = ({ children }) => {
  /* SEARCH RESULTS */
  const [view, setView] = useState("character");

  const setCharacter = () => {
    setView("character");
  };

  const setEpisode = () => {
    setView("episode");
  };

  const setLocation = () => {
    setView("location");
  };

  return (
    <rickMortyContext.Provider
      value={{
        view,
        setCharacter,
        setEpisode,
        setLocation,
      }}
    >
      {children}
    </rickMortyContext.Provider>
  );
};

export default RickMortyState;
