import { useContext } from 'react';
import { rickMortyContext } from '../context/rickMortyContext';
import DataLoader from './DataLoader';
import CharacterCard from './CharacterCard';
import BackToTopBtn from './BackToTopBtn';

const Characters = () => {
  const { view, data, loading } = useContext(rickMortyContext);

  return (
    <main className='main'>
      <h4 className='main__title'>
        Displaying:{' '}
        {view[0].toUpperCase() + view.substring(1).toLowerCase() + 's'}
      </h4>
      {loading && <DataLoader />}
      <div className='card-container'>
        {data &&
          data.map((item) => (
            <CharacterCard
              key={`character-${item.id}`}
              image={item.image}
              name={item.name}
              status={item.status}
              species={item.species}
              gender={item.gender}
              origin={item?.origin?.name}
              location={item?.location?.name}
              episode={item.episode[0].slice(-3).replaceAll("/","")}
            />
          ))}
      </div>
      <BackToTopBtn />
    </main>
  );
};

export default Characters;
