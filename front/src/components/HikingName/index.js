// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './hikingName.scss';

// == Component
const HikingName = ({ name }) => (
  <div className="hikingName">
    <h1 className="hikingName__name">{name}</h1>
  </div>
);

HikingName.propTypes = {
  name: PropTypes.string.isRequired,
};

// == Export
export default HikingName;
