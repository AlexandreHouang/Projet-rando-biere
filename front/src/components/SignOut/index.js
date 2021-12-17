// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './signOut.scss';

// If component receive in props's value: signOutHide="signOutHide", hide logout button with CSS
// == Composant
const SignOut = ({
  signOutHide,
  // isLogged,
  logOut,
}) => (
  // logOut come from container
  // signOutHide come from parent component Nav who come from RandoBiere
  <div className={`signOut ${signOutHide}`}>
    <button
      type="button"
      onClick={() => {
        logOut();
      }}
    >
      Déconnexion
    </button>
  </div>
);

SignOut.propTypes = {
  signOutHide: PropTypes.string,
  // isLogged
  logOut: PropTypes.func.isRequired,
};

// Props's default value.
SignOut.defaultProps = {
  signOutHide: '',
};

// == Export
export default SignOut;
