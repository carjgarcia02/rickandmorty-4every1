import { useEffect, useState, useContext } from "react";
import { rickMortyContext } from "../context/rickMortyContext";

const useFetch = () => {
  const { view } = useContext(rickMortyContext); // brought from context
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (view, currentPage) => {
    let url = `https://rickandmortyapi.com/api/${view}?page=${currentPage}`;
    const response = await fetch(url);
    const data = await response.json();
    setData(data.results);
    setPages(data.info.pages);
  };

  useEffect(() => {
    fetchData(view, currentPage);
  }, [view, currentPage]);

  const changePage = (e) => {
    e.preventDefault();
    setCurrentPage(e.target.value);
  };

  return {
    view,
    data,
    pages,
    currentPage,
    changePage,
  };
};

export default useFetch;
