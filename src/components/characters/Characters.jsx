import CharacterCard from "./CharacterCard";
import Pagination from '../Pagination';
import { useEffect, useState } from "react";


const Characters = () => {

  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCharacters = async (currentPage) => {
    let url = `https://rickandmortyapi.com/api/character?page=${currentPage}`;
    const response = await fetch(url);
    const data = await response.json();
    setCharacters(data.results);
    setTotalPages(data.info.pages);
  }

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  const changePage = (e) => {
    e.preventDefault();
    setCurrentPage(e.target.value);
  }

  return (
    <>
      <Pagination currentPage={currentPage} totalPages={totalPages} changePage={changePage}/>
      <div className="cards-container">
          {characters.map(item =>   
          <CharacterCard
            key={item.id}
            image={item.image}
            name={item.name}
            status={item.status}
            species={item.species}
            gender={item.gender} />  
          )}   
      </div>
    </>
  )
}

export default Characters