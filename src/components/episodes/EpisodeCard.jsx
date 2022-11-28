import EpisodeImage from "../../assets/images/episode_image.jpg";

const EpisodeCard = ({ name, air_date, episode }) => {
  return (
    <div className="card">
      <div className="card__body">
        <img className="card_image" src={EpisodeImage} alt="Episode Image" />
        <h3 className="card__title">{name}</h3>
        <p className="card__text">
          <b>Air Date:</b> {air_date}
        </p>
        <p className="card__text">
          <b>Number:</b> {episode}
        </p>
      </div>
    </div>
  );
};

export default EpisodeCard;
