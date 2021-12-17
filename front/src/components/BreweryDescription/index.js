// == Import npm
import React from 'react';
import PropTypes, { array } from 'prop-types';

// == Import
import './breweryDescription.scss';
import atYellow from 'src/assets/images/atYellow.svg';
import phoneYellow from 'src/assets/images/phoneYellow.svg';

// == Composant
const BreweryDescription = ({ description, email, phone_number }) => {
  // Add space between phone number.
  // Convert into type string to use .concat()
  const stringPhone = '' + phone_number;
  let frPhone = '';
  let indexA = 1;
  let indexB = 2;

  frPhone = stringPhone[0];
  // Loop to add space every 2 characters.
  for (let compteur = 0; compteur < 4; compteur++) {
    frPhone = frPhone.concat(' ', stringPhone[indexA] + stringPhone[indexB]);
    indexA = indexA + 2;
    indexB = indexB + 2;
  }

  return (
    <div className="breweryDescription">
      <p className="breweryDescription__text">{description}</p>
      <div className="breweryDescription__mail">
        <img className="icon" src={atYellow} alt="Mail" />
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div className="breweryDescription__phone">
        <img className="icon" src={phoneYellow} alt="Téléphone" />
        <p>0{frPhone}</p>
      </div>
    </div>
  );
};

BreweryDescription.propTypes = {
  description: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone_number: PropTypes.number.isRequired,
};

// == Export
export default BreweryDescription;
