// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './breweryName.scss';
import pinYellow from 'src/assets/images/pinYellow.svg';

// == Composant
const BreweryName = ({ name, adress, region }) => (
  <div className="breweryName">
    <h1 className="breweryName__name">{name}</h1>
    <div className="breweryName__adress">
      <img className="icon" src={pinYellow} alt="Localisation" />
      <address>{adress} - {region}</address>
    </div>
  </div>
);

BreweryName.propTypes = {
  name: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};

// == Export
export default BreweryName;
