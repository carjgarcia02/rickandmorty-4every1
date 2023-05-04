const CharacterCard = ({ image, name, status, species, gender }) => {
  return (
    <div className="card">
      <div className="status">
        {/* Sets a circle color according to status. */}
        {status === "Alive" ? (
          <div className="status__circle-green"></div>
        ) : status === "Dead" ? (
          <div className="status__circle-red"></div>
        ) : null}

        <p className="status__text">{status}</p>
      </div>

      <img className="card__image" src={image} alt="Character Image" />

      <div className="card__info">
        <h3 className="card__info-title">{name}</h3>
        <p className="card__info-text">
          {species} - {gender}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
