const CharacterCard = ({ image, name, status, species, gender }) => {
  return (
    <div className="card">
      <div className="card__header">
        
      </div>
      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <img className="card__image" src={image} alt="Character Image" />
        <p className="card__text">
          <b>Status:</b> {status}
        </p>
        <p className="card__text">
          <b>Species:</b> {species}
        </p>
        <p className="card__text">
          <b>Gender:</b> {gender}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
