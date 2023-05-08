import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const LocationCard = ({ name, type, dimension }) => {
  return (
    <div className="card">
      <div className="card__icon">
        <FontAwesomeIcon icon={faGlobe} />
      </div>
      <div className="card__info">
        <h3 className="card__info-title">{name}</h3>
        <p className="card__info-text">
          <b>Type:</b> {type}
        </p>
        <p className="card__info-text">
          <b>Dimension:</b> {dimension}
        </p>
      </div>
    </div>
  );
};

export default LocationCard;
