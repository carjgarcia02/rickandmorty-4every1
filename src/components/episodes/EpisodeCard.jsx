import EpisodeImage from '../../assets/images/episode_image.jpg';

const EpisodeCard = ({name, air_date, episode}) => {
  return (
    <div className="card">
      <img className="card_image" src={EpisodeImage} alt="Episode Image" />
      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <p className="card__text"><b>Air Date: {air_date}</b></p>
        <p className="card__text"><b>Number: {episode}</b></p>
      </div>
    </div>
  )
}

export default EpisodeCard