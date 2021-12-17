// == Import npm
import React from 'react';
import BreweryCards from 'src/containers/BreweryCards';
import { Link } from 'react-router-dom';

// == Import
import './homepageArticles.scss';
import Title from 'src/components/Title';
import yellowRightArrow from 'src/assets/images/yellowRightArrow.svg';

// == Composant
const HomepageArticles = () => (
  <div className="homepageArticles">
    <Title title="Sélection des meilleures brasseries du moment" />
    <BreweryCards />
    <div className="view-brasseries">
      <Link className="view-brasseries__link" to="/brasseries">
        Voir toutes les brasseries
        <img src={yellowRightArrow} className="breweryCardYellowArrow" alt="yellow right arrow" />
      </Link>
    </div>

  </div>
);

// == Export
export default HomepageArticles;
