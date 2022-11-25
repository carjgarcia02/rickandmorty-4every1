import LocationImage from "../../assets/images/location_image.jpg";

const LocationCard = ({ name, type, dimension }) => {
  return (
    <div className="card">
      <img className="card_image" src={LocationImage} alt="Location Image" />
      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <p className="card__text">
          <b>Type: {type}</b>
        </p>
        <p className="card__text">
          <b>Dimension: {dimension}</b>
        </p>
      </div>
    </div>
  );
};

export default LocationCard;
