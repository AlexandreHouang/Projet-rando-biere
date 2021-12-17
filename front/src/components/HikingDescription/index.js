// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './hikingDescription.scss';
import difficultyYellow from 'src/assets/images/difficultyYellow.svg';
import distanceYellow from 'src/assets/images/distanceYellow.svg';
import clockYellow from 'src/assets/images/clockYellow.svg';

// == Component
const HikingDescription = ({ 
  description,
  difficulty,
  time,
  distance, }) => (
    <div className="hikingDescription">
      <p className="hikingDescription__text">{description}</p>
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
);

HikingDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

// == Export
export default HikingDescription;
