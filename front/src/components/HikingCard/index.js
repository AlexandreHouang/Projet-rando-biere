// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './hikingCard.scss';
import difficultyYellow from 'src/assets/images/difficultyYellow.svg';
import distanceYellow from 'src/assets/images/distanceYellow.svg';
import clockYellow from 'src/assets/images/clockYellow.svg';

// == Composant
const HikingCard = ({
  main_img,
  name,
  description,
  difficulty,
  time,
  distance,
  id,
}) => (
  <Link to={`/randonnees/${id}`} className="hikingCard">
    <div className="hikingCard__img">
      <img src={`/images/hiking/${main_img}.jpg`} alt={name} />
    </div>
    <div className="hikingCard__border">
      <div className="hikingCard__content">
        <h3 className="content__title">{name}</h3>
        <p className="content__description">{description}</p>
        <div className="content__difficulty">
          <img className="icon" src={difficultyYellow} alt="Difficulté" />
          <p>Niveau {difficulty}</p>
        </div>
        <div className="content__distance">
          <img className="icon" src={distanceYellow} alt="Distance" />
          <p>{distance} km</p>
        </div>
        <div className="content__time">
          <img className="icon" src={clockYellow} alt="Temps" />
          <p>{time}</p>
        </div>
      </div>
    </div>
  </Link>
);

HikingCard.propTypes = {
  main_img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

// == Export
export default HikingCard;
