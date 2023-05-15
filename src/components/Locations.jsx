import { useContext } from 'react';
import { rickMortyContext } from '../context/rickMortyContext';
import DataLoader from './DataLoader';
import LocationCard from './LocationCard';
import BackToTopBtn from './BackToTopBtn';

const Locations = () => {
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
  );
};

export default Locations;
