import { useState, useEffect } from 'react';
import { rickMortyContext } from './rickMortyContext';

const RickMortyState = ({ children }) => {
  /* SEARCH RESULTS */
  const [view, setView] = useState('character');
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    let url = `https://rickandmortyapi.com/api/${view}/?page=${currentPage}`;
    const response = await fetch(url);
    const data = await response.json();
    setData(data.results);
    setPages(data.info.pages);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, view]);

  const setCharacter = () => {
    setView('character');
  };

  const setEpisode = () => {
    setView('episode');
  };

  const setLocation = () => {
    setView('location');
  };

  const handlePages = (e) => {
    const value = e.target.value;
    setCurrentPage(value);
  };

  return (
    <rickMortyContext.Provider
      value={{
        view,
        data,
        pages,
        setCharacter,
        setEpisode,
        setLocation,
        handlePages
      }}
    >
      {children}
    </rickMortyContext.Provider>
  );
};

export default RickMortyState;
