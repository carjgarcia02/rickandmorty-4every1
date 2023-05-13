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
          origin={item.origin.name}
          location={item.location.name}
          episode={item.episode[0].slice(-2).replace("/","")}
        />
      ))}
    </div>
  );
};

export default Characters;
