import Pagination from "../Pagination";
import LocationCard from "./LocationCard";
import { useEffect, useState } from "react";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchLocations = async (currentPage) => {
    let url = `https://rickandmortyapi.com/api/location?page=${currentPage}`;
    const response = await fetch(url);
    const data = await response.json();
    setLocations(data.results);
    setTotalPages(data.info.pages);
  };

  useEffect(() => {
    fetchLocations(currentPage);
  }, [currentPage]);

  const changePage = (e) => {
    e.preventDefault();
    setCurrentPage(e.target.value);
  };

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        changePage={changePage}
      />
      <div className="cards-container">
        {locations.map((item) => (
          <LocationCard
            key={item.id}
            name={item.name}
            type={item.type}
            dimension={item.dimension}
          />
        ))}
      </div>
    </>
  );
};

export default Locations;
