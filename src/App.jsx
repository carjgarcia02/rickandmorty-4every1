//Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pagination from './components/Pagination';
import Results from './components/Results';
import Footer from './components/Footer';
//Routes
import { Route, Routes, Navigate } from 'react-router-dom';
//Context
import RickMortyState from './context/RickMortyState';
import { createContext, useEffect, useState } from 'react';
//Loading Spinner
import Pacman from './components/Pacman';

/* CONTEXT CREATED FOR DARK MODE */
export const ThemeContext = createContext(null);

const App = () => {
  /* Dark Mode */
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };
  /* First Time Loader */
  const [initialLoader, setInitialLoader] = useState(false);
  useEffect(() => {
    setInitialLoader(true);
    setTimeout(() => {
      setInitialLoader(false);
    }, 2500);
  }, []);

  return (
    <RickMortyState>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {initialLoader ? (
          <Pacman />
        ) : (
          <div className='App' id={theme}>
            <Navbar />
            <Hero />
            <Pagination />
            <Routes>
              <Route path='/' element={<Results />} />
              <Route path='/results' element={<Results />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
            <Footer />
          </div>
        )}
      </ThemeContext.Provider>
    </RickMortyState>
  );
};

export default App;
