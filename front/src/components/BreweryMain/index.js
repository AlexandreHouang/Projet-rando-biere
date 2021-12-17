// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import Material UI
import CircularProgress from '@material-ui/core/CircularProgress';

// == Import
import './breweryMain.scss';
import BreweryCard from '../BreweryCard';

// == Composant
const BreweryMain = ({ breweriesList, loader }) => (
  <div className="breweryMain">
    {loader === true && (
      <div className="loader">
        <CircularProgress />
      </div>
    )}
    {loader === false && breweriesList.length === 0 && (
      // If the length of the "list of breweries" array is 0
      // so that means that no brewery belongs to this region
      <p className="breweryMain__noResults">Aucune brasserie ne correspond à vos critères de recherche</p>
    )}
    {loader === false && breweriesList.length !== 0 && (
      <>
        {/* Here, I want to retrieve information from the state to make a map.
       The state information comes from a connection to API back (loadingBreweries) */}
        {breweriesList.map((brewery) => (
          <BreweryCard key={brewery.id} {...brewery} />
        ))}
      </>
    )}
  </div>
);

BreweryMain.propTypes = {
  breweriesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  loader: PropTypes.bool.isRequired,
};

// == Export
export default BreweryMain;
