import { useContext } from 'react';
import { rickMortyContext } from '../context/rickMortyContext';
import CharacterCard from './CharacterCard';
import EpisodeCard from './EpisodeCard';
import LocationCard from './LocationCard';
import DataLoader from './DataLoader';
import BackToTopBtn from './BackToTopBtn';

const Results = () => {
  const { category, data, loading } = useContext(rickMortyContext);

  return (
    <div>
      <main className='main'>
        <h4 className='main__title'>
          Displaying:{' '}
          {category[0].toUpperCase() +
            category.substring(1).toLowerCase() +
            's'}
        </h4>
        {loading && <DataLoader />}
        <div className={loading ? 'hidden' : 'card-container'}>
          {category === 'character'
            ? data?.map((item) => (
                <CharacterCard
                  key={`character-${item.id}`}
                  image={item.image}
                  name={item.name}
                  status={item.status}
                  species={item.species}
                  gender={item.gender}
                  origin={item?.origin?.name}
                  location={item?.location?.name}
                />
              ))
            : category === 'episode'
            ? data?.map((item) => (
                <EpisodeCard
                  key={`episode-${item.id}`}
                  name={item.name}
                  air_date={item.air_date}
                  episode={item.episode}
                />
              ))
            : category === 'location' &&
              data?.map((item) => (
                <LocationCard
                  key={`location-${item.id}`}
                  name={item.name}
                  type={item.type}
                  dimension={item.dimension}
                />
              ))}
        </div>
        <BackToTopBtn />
      </main>
    </div>
  );
};

export default Results;
