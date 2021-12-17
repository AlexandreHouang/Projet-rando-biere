/* eslint-disable max-len */
// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import components
import HikingCard from 'src/components/HikingCard';
import Title from 'src/components/Title';

// == Import
import './hikingCardsForHiking.scss';

// == Composant
const HikingCardsForHiking = ({
  loadingBreweryDetails,
  breweryId,
  locationIDForHikeCard,
  breweryDetails }) => {
  // I retrieve the brewery data linked to the top of the page displayed hike (in the HikingCardDetails component).

  // Here, between the square brackets, I had to put breweryId (I hadn't done it before and it bugged the hikes), otherwise this component's parent was not mounted again so this useEffect was not reloaded. By putting breweryId between the square brackets, as soon as HikingCardsForHiking will be fed with the good breweryId by the HikingContainer, then the useEffect will be reloaded.
  useEffect(() => {
    loadingBreweryDetails(breweryId);
  }, [breweryId]);

  {/* Here, I have to only display the remaining hikes of the brewery to which the hike displayed in details on the top of this Details Page belongs.
  1/I look for the brewery associated to the displayed hike. 
  2/ Then I filter in a new array the hikes belonging to this brewery and I delete the one already displayed in HikingCardDetails.
  3/ At last, I display with a map the hikes of the array that I got. */}

  if (!breweryDetails.hikes || breweryDetails.hikes.length === 0 ) {
    return <div>Aucun randonnée à afficher</div>;
  }

  const hikes = breweryDetails.hikes

  // Here, I filter the hikes of the proper brewery to only keep the ones that are not displayed in the top of the hike Details Page.
  const result = hikes.filter(hike => hike.id !== parseInt(locationIDForHikeCard, 10));

  return (
    <div className="hikingCards">
      <Title title="Les autres randonnées de cette brasserie" />
      <div className="hikingCards__content">
        {/* Retrieve the precedently filtered data */}
        { result.map((hike) => (
          <HikingCard key={hike.id} {...hike} />
        ))}
      </div>
    </div>
  );
};

HikingCardsForHiking.propTypes = {
  loadingBreweryDetails: PropTypes.func.isRequired,
  breweryId: PropTypes.number.isRequired,
  locationIDForHikeCard: PropTypes.string.isRequired,
  breweryDetails: PropTypes.shape({
  }).isRequired,
};

// == Export
export default HikingCardsForHiking;


