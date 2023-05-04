//Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
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
        <main className="main">
          <Routes>
            <Route path="/" element={<Results />} />
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </RickMortyState>
  );
};

export default App;
