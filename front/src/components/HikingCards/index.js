// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import components
import HikingCard from 'src/components/HikingCard';
import Title from 'src/components/Title';

// == Import
import './hikingCards.scss';

// == Composant
const HikingCards = ({ breweryDetails }) => (
  <div className="hikingCards">
    <Title title="Les randonnées associées" />
    <div className="hikingCards__content">
      {/* For each hike associated to a brewery, I display a hike card. */}
      {breweryDetails.hikes.map((hike) => (
        <HikingCard key={hike.id} {...hike} />
      ))}
    </div>
  </div>
);

HikingCards.propTypes = {
  breweryDetails: PropTypes.shape({
    hikes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

// == Export
export default HikingCards;
