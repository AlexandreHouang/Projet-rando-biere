// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './footer.scss';

// == Composant
const Footer = () => {
  // We take the year of today's date for the copyright
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p className="footer__content">© Copyright {year} Rando-Bière</p>
      <div className="footer__content">
        <Link to="/mentions-legales" className="footer__content__link">Mentions légales</Link>
        <Link to="/login" className="footer__content__link">Administration</Link>
      </div>
    </div>
  );
};

// == Export
export default Footer;
