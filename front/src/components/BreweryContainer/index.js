// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

// == Import Material UI
import CircularProgress from '@material-ui/core/CircularProgress';

// == Import components & containers
import BreweryCardDetails from 'src/containers/BreweryCardDetails';
import HikingCards from 'src/containers/HikingCards';

// == Composant
const BreweryContainer = ({ loadingBreweryDetails, breweryDetails }) => {
    // I need to know the brewery ID, to make the right API call
  // We were using useLocation before, but it could get bugged if the URL we modified, so we used useParams instead. In both case, it allows to only keep the id in /brasseries/2
  const {id: breweryId} = useParams();

  // For each component loading, I want to trigger the loadingBreweryDetails action.
  // This action uses axios (through the middleware) to call the back
  // API and get the brewery data. I pass the ID that I got before as params.
  useEffect(() => {
    loadingBreweryDetails(breweryId);
  }, []);

  return (
    <>
      {breweryDetails.id === undefined && (
        <div className="loader">
          <CircularProgress />
        </div>
      )}
      {breweryDetails.id !== undefined && (
        <div className="breweryContainer">
          <BreweryCardDetails />
          <HikingCards />
        </div>
      )}
    </>
  );
};

BreweryContainer.propTypes = {
  loadingBreweryDetails: PropTypes.func.isRequired,
  breweryDetails: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

// == Export
export default BreweryContainer;
