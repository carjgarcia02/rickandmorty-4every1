//Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Characters from "./components/characters/Characters";
import Locations from "./components/locations/Locations";
import Episodes from "./components/episodes/Episodes";
import Footer from "./components/Footer";

//Routes
import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main className="main">
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
