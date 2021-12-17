// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Import components
import BreweryCard from 'src/components/BreweryCard';

// == Import
import './breweryCards.scss';

// == Composant
const BreweryCards = ({ loadingBreweries, breweriesList, startLoader }) => {
  // Each time the component is loaded, I want to trigger the loadingBreweries action
  // this action uses axios to call the back API
  useEffect(() => {
    startLoader();
    loadingBreweries();
  }, []);

  // I just want the first three results
  const threeBreweries = breweriesList.slice(0, 3);

  return (
    <div className="breweryCards">
      {/* Here, I want to retrieve information from the state to make a map.
       The state information comes from a connection to API back (loadingBreweries) */}
      {threeBreweries.map((brewery) => (
        <BreweryCard key={brewery.id} {...brewery} />
      ))}
    </div>
  );
};

BreweryCards.propTypes = {
  loadingBreweries: PropTypes.func.isRequired,
  breweriesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  startLoader: PropTypes.func.isRequired,
};

// == Export
export default BreweryCards;
