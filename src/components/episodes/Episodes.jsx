import EpisodeCard from "./EpisodeCard";
import Pagination from "../Pagination";
import { useEffect, useState } from "react";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchEpisodes = async (currentPage) => {
    let url = `https://rickandmortyapi.com/api/episode?page=${currentPage}`;
    const response = await fetch(url);
    const data = await response.json();
    setEpisodes(data.results);
    setTotalPages(data.info.pages);
  };

  useEffect(() => {
    fetchEpisodes(currentPage);
  }, [currentPage]);

  const changePage = (e) => {
    e.preventDefault();
    setCurrentPage(e.target.value);
  };

  return (
    <div className="main">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        changePage={changePage}
      />
      <div className="card-container">
        {episodes.map((item) => (
          <EpisodeCard
            key={item.id}
            name={item.name}
            air_date={item.air_date}
            episode={item.episode}
          />
        ))}
      </div>
    </div>
  );
};

export default Episodes;
