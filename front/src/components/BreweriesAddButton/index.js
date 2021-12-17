// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './breweriesAddButton.scss';

// == Composant
const BreweriesAddButton = () => (
  <div className="breweriesAddButton">
    <Link to="/admin/brasserie">
      <button type="button">
        + Ajouter une brasserie
      </button>
    </Link>
  </div>
);

// == Export
export default BreweriesAddButton;
