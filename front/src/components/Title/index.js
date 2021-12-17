// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './title.scss';

// == Composant

const Title = ({ title }) => (
  <div className="title">
    <h2>{title}</h2>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

// == Export
export default Title;
