

const CharacterCard = ({image, name, status, species, gender}) => {
  return (
    <div className="card">
      <img className="card_image" src={image} alt="Character Image" />
      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <p className="card__text"><b>Status: {status}</b></p>
        <p className="card__text"><b>Species: {species}</b></p>
        <p className="card__text"><b>Gender: {gender}</b></p>
      </div>
    </div>
  )
}

export default CharacterCard