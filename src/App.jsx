//Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pagination from "./components/Pagination";
import Results from "./components/Results";
import Footer from "./components/Footer";
//Routes
import { Route, Routes, Navigate } from "react-router-dom";
//Context
import RickMortyState from "./context/RickMortyState";
import { createContext, useState } from "react";

/* CONTEXT CREATED FOR DARK MODE */
export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    console.log("cambio")
  };

  return (
    <RickMortyState>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <Navbar />
          <Hero />
          <Pagination />
          <Routes>
            <Route path="/" element={<Results />} />
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </RickMortyState>
  );
};

export default App;
