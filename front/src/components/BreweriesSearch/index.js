// == Import npm
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import components & containers
import BreweryHeader from 'src/components/BreweryHeader';
import BreweryMain from 'src/containers/BreweryMain';

// == Composant
const BreweriesSearch = ({ loadingBreweriesFilterOrNot, redirectSearchbar, startLoader }) => {
  // Using useLocation, I get the name of the region from the url
  const region = useLocation().search.split('?region=')[1];

  useEffect(() => {
    // Start the loader
    startLoader();
    // each time the component is returned, I will load the breweries (filtered or not)
    loadingBreweriesFilterOrNot(region);
  }, [redirectSearchbar]);

  return (
    <>
      <BreweryHeader />
      <BreweryMain />
    </>
  );
};

BreweriesSearch.propTypes = {
  loadingBreweriesFilterOrNot: PropTypes.func.isRequired,
  redirectSearchbar: PropTypes.string.isRequired,
  startLoader: PropTypes.func.isRequired,
};

// == Export
export default BreweriesSearch;
