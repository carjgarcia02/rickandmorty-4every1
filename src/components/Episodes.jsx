import { useContext } from 'react';
import { rickMortyContext } from '../context/rickMortyContext';
import DataLoader from './DataLoader';
import EpisodeCard from './EpisodeCard';
import BackToTopBtn from './BackToTopBtn';

const Episodes = () => {
  const { view, data, loading } = useContext(rickMortyContext);

  return (
    <main className='main'>
      <h4 className='main__title'>
        Displaying:{' '}
        {view[0].toUpperCase() + view.substring(1).toLowerCase() + 's'}
      </h4>
      {loading && <DataLoader />}
      <div className={loading ? 'hidden' : 'card-container'}>
        {data &&
          data.map((item) => (
            <EpisodeCard
              key={`episode-${item.id}`}
              name={item.name}
              air_date={item.air_date}
              episode={item.episode}
            />
          ))}
      </div>
      <BackToTopBtn />
    </main>
  );
};

export default Episodes;
