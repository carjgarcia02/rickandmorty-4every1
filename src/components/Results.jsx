import useFetch from "../hooks/useFetch";
import Pagination from "./Pagination";
import CharacterCard from "./CharacterCard";
import LocationCard from "./LocationCard";
import EpisodeCard from "./EpisodeCard";

const Results = () => {
  const { view, data, pages, currentPage, changePage } = useFetch();

  return (
    <div className="main">
      <Pagination
        currentPage={currentPage}
        pages={pages}
        changePage={changePage}
      />
      <div className="card-container">
        {view === "character"
          ? console.log("char")
          : console.log("something else")}

        {data.map((item) => (
          <CharacterCard
            key={item.id}
            image={item.image}
            name={item.name}
            status={item.status}
            species={item.species}
            gender={item.gender}
          />
        ))}
      </div>
    </div>
  );
};

export default Results;
