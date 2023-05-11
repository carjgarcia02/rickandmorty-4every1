import LocationCard from './LocationCard';

const Locations = ({ data }) => {
  return (
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
  );
};

export default Locations;
