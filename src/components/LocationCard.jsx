import LocationImage from "../assets/images/location_image.jpg";

const LocationCard = ({ name, type, dimension }) => {
  return (
    <div className="card">
      <div className="card__body">
        <img className="card_image" src={LocationImage} alt="Location Image" />
        <h3 className="card__title">{name}</h3>
        <p className="card__text">
          <b>Type:</b> {type}
        </p>
        <p className="card__text">
          <b>Dimension:</b> {dimension}
        </p>
      </div>
    </div>
  );
};

export default LocationCard;
