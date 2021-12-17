// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

// == Import Material UI
import CircularProgress from '@material-ui/core/CircularProgress';

// == Import components & containers
import HikingCardDetails from '../HikingCardDetails';
import HikingCardsForHiking from 'src/containers/HikingCardsForHiking';

// == Composant
const HikingContainer = ({ loadingHikingDetails, hikingDetails }) => {
  // I must know this hike Id, in order to make the right API call
  // We were using useLocation before, but it could get bugged if the URL is modified, so we used useParams instead. In both case, it allows to only keep the id in /brasseries/2
  const { id: hikingId } = useParams();

  // At each Component loading, I want to trigger the loadingHikingDetails action
  // This action uses axios (through the middleware) to call the back
  // API and get the brewery data. I pass the ID that I got before as params.
  // Here, between the square brackets, I absolutely needed to put hikingId: it was not there before, and as a result it was always the same hike that was displayed in details at the top of the page!
  // (well, especially since Sebastien had resolved the other space bug which was that the hikes of the different breweries were mixing, and that he had finally succeeded in resolving by putting breweryId in the square)
  // brackets of the useEffect of HikingCardsForHiking; I took my inspiration in this solution here, and it solved the bug.

  useEffect(() => {
    loadingHikingDetails(hikingId);
  }, [hikingId]);

  return (
    <>
      {hikingDetails.id === undefined && (
        <div className="loader">
          <CircularProgress />
        </div>
      )}
      {hikingDetails.id !== undefined && (
        <div className="hikingContainer">
          <HikingCardDetails hikingDetails={hikingDetails} />
          <HikingCardsForHiking
            breweryId={hikingDetails.brewery_id} 
            locationIDForHikeCard={hikingId} />
        </div>
      )}
    </>
  );
};

HikingContainer.propTypes = {
  loadingHikingDetails: PropTypes.func.isRequired,
  hikingDetails: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

// == Export
export default HikingContainer;
