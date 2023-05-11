import CharacterCard from './CharacterCard';
import LocationCard from './LocationCard';
import EpisodeCard from './EpisodeCard';
import { useContext } from 'react';
import { rickMortyContext } from '../context/rickMortyContext';

import DataLoader from './DataLoader';

const Results = () => {
  const { view, data, loading } = useContext(rickMortyContext);

  if (view === 'character') {
    return (
      <main className='main'>
        {loading ? (
          <DataLoader />
        ) : (
          <div className='card-container'>
            {data.map((item) => (
              <CharacterCard
                key={`character-${item.id}`}
                image={item.image}
                name={item.name}
                status={item.status}
                species={item.species}
                gender={item.gender}
              />
            ))}
          </div>
        )}
      </main>
    );
  } else if (view === 'location') {
    return (
      <main className='main'>
        {loading ? (
          <DataLoader />
        ) : (
          <div className='card-container'>
            {data.map((item) => (
              <LocationCard
                key={`location-${item.id}`}
                name={item.name}
                type={item.type}
                dimension={item.dimension}
              />
            ))}
          </div>
        )}
      </main>
    );
  } else if (view === 'episode') {
    return (
      <main className='main'>
        {loading ? (
          <DataLoader />
        ) : (
          <div className='card-container'>
            {data.map((item) => (
              <EpisodeCard
                key={`episode-${item.id}`}
                name={item.name}
                air_date={item.air_date}
                episode={item.episode}
              />
            ))}
          </div>
        )}
      </main>
    );
  }
};

export default Results;
