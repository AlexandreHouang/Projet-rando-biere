// == Import npm
import React from 'react';

// == Import
import './breweryHeader.scss';
import Searchbar from 'src/containers/Searchbar';

// == Composant
const BreweryHeader = () => (
  <div className="breweryHeader">
    <div className="flexedElement">
      <Searchbar />
    </div>
  </div>
);

// == Export
export default BreweryHeader;
