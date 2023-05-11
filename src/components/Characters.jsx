import CharacterCard from './CharacterCard';

const Characters = ({ data }) => {
  return (
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
  );
};

export default Characters;
