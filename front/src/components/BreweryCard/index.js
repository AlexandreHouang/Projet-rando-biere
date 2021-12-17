/* eslint-disable max-len */
// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './breweryCard.scss';
import mapMarker from 'src/assets/images/mapMarker.svg';
import yellowMountain from 'src/assets/images/yellowMountain.svg';
import yellowRightArrow from 'src/assets/images/yellowRightArrow.svg';

// == Composant
const BreweryCard = ({
  name,
  main_img,
  region,
  description,
  hikes_number,
  id,
}) => (
  <Link to={`/brasseries/${id}`} className="breweryCard">
    {/* Brewery's image */}
    <div className="breweryCard-img-container">
      <img src={`/images/breweries/${main_img}.jpg`} className="breweryCard-img" alt="Brewery" />
    </div>
    <div className="breweryCard-content">
      <div className="breweryCard-regionDiv">
        <img src={mapMarker} className="breweryCard-mapMarker" alt="mapMarker" />
        <p className="breweryCard-city">{region}</p>
      </div>

      <h2>{name}</h2>
      <p className="breweryCard-description">{description}</p>
      {/* <br></br> */}

      {/* <div className="icon-container">
      <img src={yellowBeer} className="breweryCard-icon" alt="yellow beer" />
      <p className="breweryCard-icon-description">L'ours Brun</p>
    </div> */}
      <div className="icon-container">
        <img src={yellowMountain} className="breweryCard-icon" alt="yellow mountain" />
        <p className="breweryCard-icon-description">{hikes_number} randonnées</p>
      </div>
      <div className="visiter-container">
        <span>Visiter</span>
        <img src={yellowRightArrow} className="breweryCardYellowArrow" alt="yellow right arrow" />
      </div>
    </div>
  </Link>
);

BreweryCard.propTypes = {
  name: PropTypes.string.isRequired,
  main_img: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hikes_number: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

// == Export
export default BreweryCard;
