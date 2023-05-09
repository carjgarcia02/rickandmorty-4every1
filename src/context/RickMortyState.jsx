import { useState, useEffect } from 'react';
import { rickMortyContext } from './rickMortyContext';

const RickMortyState = ({ children }) => {
  /* SEARCH RESULTS */
  const [view, setView] = useState('character');
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadData, setLoadData] = useState(false);

  /* URL */
  let url = `https://rickandmortyapi.com/api/${view}/?page=${currentPage}`;

  const fetchData = async () => {
    try {
      setLoadData(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data.results);
      setPages(data.info.pages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadData(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, view]);

  const setCharacter = () => {
    setCurrentPage(1);
    setView('character');
  };

  const setEpisode = () => {
    setCurrentPage(1);
    setView('episode');
  };

  const setLocation = () => {
    setCurrentPage(1);
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
        loadData,
        setCharacter,
        setEpisode,
        setLocation,
        handlePages,
        setLoadData,
      }}
    >
      {children}
    </rickMortyContext.Provider>
  );
};

export default RickMortyState;
