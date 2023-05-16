import { useState, useEffect } from 'react';
import { rickMortyContext } from './rickMortyContext';
import { useRef } from 'react';

const RickMortyState = ({ children }) => {
  /* Search results */
  const [category, setCategory] = useState('character');
  const [currentPage, setCurrentPage] = useState(0); // Used for pagination and results
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(1); // Total # of pages from the api call, depending on the category

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://rickandmortyapi.com/api/${category}/?page=${currentPage + 1}`
        );
        const data = await response.json();
        setData(data.results);
        setPageCount(data.info.pages);
      } catch (error) {
        console.log('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, currentPage]);

  /* Handle category and pages */
  const handleChangeCategory = (newCategory) => {
    setCurrentPage(0);
    setCategory(newCategory);
    pagesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChangePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  /* Scroll variables */
  const pagesRef = useRef(null);
  const scrollToPagination = () =>
    pagesRef.current.scrollIntoView({ behavior: 'smooth' });

  /* Load data */
  const [loading, setLoading] = useState(false); // State that controls the loading spinner

  return (
    <rickMortyContext.Provider
      value={{
        category,
        currentPage,
        data,
        pageCount,
        loading,
        setLoading,
        pagesRef,
        handleChangeCategory,
        handleChangePage,
        scrollToPagination,
      }}
    >
      {children}
    </rickMortyContext.Provider>
  );
};

export default RickMortyState;
