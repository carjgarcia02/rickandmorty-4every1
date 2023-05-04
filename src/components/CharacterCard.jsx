const CharacterCard = ({ image, name, status, species, gender }) => {
  return (
    <div className="card">
      <div className="card__header">
        <div className="status">
          <div className="status__circle"></div>
          <p className="status__text">{status}</p>
        </div>
      </div>
      <img className="card__image" src={image} alt="Character Image" />
      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <p className="card__text">
          {species} - {gender}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
