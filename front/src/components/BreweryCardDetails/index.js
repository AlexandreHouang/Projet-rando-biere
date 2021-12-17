import React from 'react';
import PropTypes from 'prop-types';

// == Import components
import Carousel from 'src/components/Carousel';
import BreweryName from 'src/components/BreweryName';
import BreweryDescription from 'src/components/BreweryDescription';

// == Import
import './breweryCardDetails.scss';

// == Composant
const BreweryCardDetails = ({ breweryDetails }) => (
  <div className="breweryCardDetails">
    <div className="breweryCardDetails__carousel">
      <Carousel photos={breweryDetails.photos} {...breweryDetails}/>
    </div>
    <div className="breweryCardDetails__infos">
      {/* We put breweryDetails informations in each of the components in order to use them as props in these components */}
      <BreweryName {...breweryDetails} />
      <BreweryDescription {...breweryDetails} />
    </div>
  </div>
);

BreweryCardDetails.propTypes = {
  breweryDetails: PropTypes.shape({
    id: PropTypes.number,
    photos: PropTypes.array,
  }).isRequired,
};

// == Export
export default BreweryCardDetails;
