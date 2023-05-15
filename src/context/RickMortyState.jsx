import { useState, useEffect } from 'react';
import { rickMortyContext } from './rickMortyContext';
import { useRef } from 'react';

const RickMortyState = ({ children }) => {
  /* SEARCH RESULTS */
  const [view, setView] = useState('character');

  /* SCROLL VARIABLES */
  const pagesRef = useRef(null);
  const scrollToPagination = () =>
    pagesRef.current.scrollIntoView({ behavior: 'smooth' });

  /* PAGINATION */
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Used for pagination
  const [pageCount, setPageCount] = useState(1); // Total # of pages from the api call, depending on the category
  const [loading, setLoading] = useState(false); // State that controls the loading spinner

  /* Selected is destructured from the React Paginate component. the component itself manages page selection */
  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  /* URL */
  let url = `https://rickandmortyapi.com/api/${view}/?page=${currentPage + 1}`;

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data.results === undefined) {
        throw new Error('Response does not contain expected property');
      } else {
        setData(data.results);
        setPageCount(data.info.pages);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, view]);

  const setCharacter = () => {
    setCurrentPage(0);
    setView('character');
    pagesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const setEpisode = () => {
    setCurrentPage(0);
    setView('episode');
    pagesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const setLocation = () => {
    setCurrentPage(0);
    setView('location');
    pagesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <rickMortyContext.Provider
      value={{
        view,
        data,
        pageCount,
        loading,
        pagesRef,
        setCharacter,
        setEpisode,
        setLocation,
        changePage,
        setLoading,
        scrollToPagination,
      }}
    >
      {children}
    </rickMortyContext.Provider>
  );
};

export default RickMortyState;
