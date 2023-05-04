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

const App = () => {
  return (
    <RickMortyState>
      <div className="App">
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
    </RickMortyState>
  );
};

export default App;
