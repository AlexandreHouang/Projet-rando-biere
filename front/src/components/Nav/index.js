// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Import components
import Menu from 'src/components/Nav/menu';
import SignOut from 'src/containers/SignOut';

// == Import
import './nav.scss';
import logo_white from 'src/assets/images/logo_white.svg';
import logo_black from 'src/assets/images/logo_black.svg';

// == Composant
// props isWhite value come from Banner component.
// to hide logout button, put this value in props => signOutHide="signOutHide".

const Nav = ({ isWhite, logged, signOutHide, logOut }) => (
  // signOutHide come from the parent component rando biere but coding as
  // not requiered because only one component <Nav /> receive the information.
  // props's value "logged" come from container.
  // props's value "isWhite" come from component Banner.
  <div className="nav">
    <Link to="/">
      {/* ternary condition for if we want to change logo color for a page with a particular background color later*/}
      {isWhite === 'yes' ? <img src={logo_white} className="logo" alt="logo" /> : <img src={logo_white} className="logo" alt="logo" />}
    </Link>
    {(logged === true) && <SignOut signOutHide={signOutHide} />}
    <Menu isWhite={isWhite} logged={logged} logOut={logOut} />
  </div>
);

Nav.propTypes = {
  isWhite: PropTypes.string,
  signOutHide: PropTypes.string,
  logged: PropTypes.bool,
};

// default value for falcutative props.
Nav.defaultProps = {
  signOutHide: '',
  isWhite: 'no',
  logged: false,
};

Nav.propTypes = {
  logOut: PropTypes.func.isRequired,
};

// == Export
export default Nav;
