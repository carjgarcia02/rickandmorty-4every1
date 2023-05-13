import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const CharacterCard = ({
  image,
  name,
  status,
  species,
  gender,
  origin,
  location,
  episode,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
      <div className='card' key='front' onClick={handleClick}>
        <div className='status'>
          {/* Sets a circle color according to status. */}
          {status === 'Alive' ? (
            <div className='status__circle-green'></div>
          ) : status === 'Dead' ? (
            <div className='status__circle-red'></div>
          ) : null}
          <p className='status__text'>{status}</p>
        </div>

        <img className='card__image' src={image} alt='Character Image' />

        <div className='card__info'>
          <h3 className='card__info-title'>{name}</h3>
          <p className='card__info-text'>
            {species} - {gender}
          </p>
        </div>
      </div>

      <div className='card__back' key='back' onClick={handleClick}>
        <div className='card__back-info'>
          <h2 className='firstSeen'>
            {name} was born at {origin}
          </h2>
          <h3 className='location'>Location: {location}</h3>
          <h3>Debut: Ep. {episode}</h3>
          <a href='https://rickandmorty.fandom.com/wiki/Rickipedia'>
            Learn More
          </a>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default CharacterCard;
