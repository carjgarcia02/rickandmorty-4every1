import EpisodeCard from './EpisodeCard';

const Episodes = ({ data }) => {
  return (
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
  );
};

export default Episodes;
