// == Import npm
import React from 'react';

// == Import components & containers
import Searchbar from 'src/containers/Searchbar';

// == Import
import './banner.scss';
import beerAlex from 'src/assets/images/beerAlex.svg';
import Nav from 'src/containers/Nav';

// == Composant
const Banner = () => (
  <div className="banner">
    <Nav isWhite="yes" signOutHide="signOutHide" />
    <div className="bannerTitle">
      <h2 className="flexedElement">Trouvez votre prochaine</h2>
      <div className="flexedElement">
        <h1>rando-biere !</h1>
        <img src={beerAlex} className="header-logo" alt="Logo oRecipes" />
      </div>
      <div className="flexedElement">
        <Searchbar />
      </div>
    </div>
  </div>
);

// == Export
export default Banner;
