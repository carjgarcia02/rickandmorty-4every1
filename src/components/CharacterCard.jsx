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

  const flipCard = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const learnMore = (e) => {
    e.stopPropagation();
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
      <div className='card' key='front' onClick={flipCard}>
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

      <div className='card__back' key='back' onClick={flipCard}>
        <h2 className='firstSeen'>
          {name}'s origin is {origin}
        </h2>
        <h3 className='location'>Location: {location}</h3>
        <h3 className='debut'>Debut: Ep. {episode}</h3>
        <a
          className='learnMore'
          href='https://rickandmorty.fandom.com/wiki/Special:Search'
          target='_blank'
          onClick={learnMore}
        >
          Search More
        </a>
      </div>
    </ReactCardFlip>
  );
};

export default CharacterCard;
