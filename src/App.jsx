import { createContext, useEffect, useState } from 'react';
//Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Instructions from './components/Instructions';
import Pagination from './components/Pagination';
import Results from './components/Results';
import Footer from './components/Footer';
//Routes
import { Routes, Route, Navigate } from 'react-router-dom';
//Context
import RickMortyState from './context/RickMortyState';
//Loading Spinner
import Pacman from './components/Pacman';

/* Context created for Dark Mode */
export const ThemeContext = createContext(null);

const App = () => {
  /* Dark Mode */
  const loadedTheme = localStorage.getItem('theme')
    ? JSON.parse(localStorage.getItem('theme'))
    : 'light'; // Load theme from local storage.

  const [theme, setTheme] = useState(loadedTheme); //updated
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  /* Every time theme changes, it is stored in the local storage */
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  /* First Time Loader */
  const [initialLoader, setInitialLoader] = useState(false);
  useEffect(() => {
    setInitialLoader(true);
    setTimeout(() => {
      setInitialLoader(false);
    }, 1200);
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
            <Instructions />
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
