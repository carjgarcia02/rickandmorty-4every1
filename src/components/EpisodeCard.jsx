const EpisodeCard = ({ name, air_date, episode }) => {
  return (
    <div className="card">
      <div className="card__info">
        <h3 className="card__info-title">{name}</h3>
        <p className="card__info-text">
          <b>Air Date:</b> {air_date}
        </p>
        <p className="card__info-text">
          <b>Number:</b> {episode}
        </p>
      </div>
    </div>
  );
};

export default EpisodeCard;
