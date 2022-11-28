const CharacterCard = ({ image, name, status, species, gender, location }) => {
  return (
    <div className="card">
      <div className="card__body">
        <img className="card_image" src={image} alt="Character Image" />
        <h3 className="card__title">{name}</h3>
        <p className="card__text">
          <b>Status:</b> {status}
        </p>
        <p className="card__text">
          <b>Species:</b> {species}
        </p>
        <p className="card__text">
          <b>Gender:</b> {gender}
        </p>
        <p className="card__text">
          <b>Location:</b> {location}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
