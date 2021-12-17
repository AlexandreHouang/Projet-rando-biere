// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import components
import CarouselHiking from 'src/components/CarouselHiking';
import HikingName from 'src/components/HikingName';
import HikingDescription from 'src/components/HikingDescription';

// == Import
import './hikingCardDetails.scss';

// == Composant
const HikingCardDetails = ({ hikingDetails }) => (
  <div className="hikingCardDetails">
    <div className="hikingCardDetails__carousel">
      <CarouselHiking photos={hikingDetails.photos} />
    </div>
    <div className="hikingCardDetails__infos">
      {/* We give the hikingDetails informations in each of the component so that each of these informations can be used as props. */}
      <HikingName {...hikingDetails} />
      <HikingDescription {...hikingDetails} />
    </div>
  </div>
);

HikingCardDetails.propTypes = {
  hikingDetails: PropTypes.shape({
    id: PropTypes.number,
    photos: PropTypes.array,
  }).isRequired,
};

// == Export
export default HikingCardDetails;
