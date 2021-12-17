// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import Material UI
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

// == Import
import menu_icon_white from 'src/assets/images/menu_icon_white.svg';
import menu_icon_black from 'src/assets/images/menu_icon_black.svg';
import SignOut from 'src/containers/SignOut';

// == Composant

export default function MenuListComposition({ isWhite, logged, logOut }) {
  // logOut come from parent component <Nav />

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="menu">
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {isWhite === 'yes' ? <img src={menu_icon_white} className="menu_icon" alt="menu_icon" /> : <img src={menu_icon_white} className="menu_icon" alt="menu_icon" />}
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition className="z-index">
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper >
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem component={NavLink} to="/" onClick={handleClose}>Accueil</MenuItem>
                    <MenuItem component={NavLink} to="/brasseries" onClick={handleClose}>Brasseries</MenuItem>
                    {/* show menu item if admin is logged */}
                    {(logged === true) && <MenuItem component={NavLink} to="/admin" onClick={handleClose}>Admin Dashboard</MenuItem>}
                    {(logged === true) && (
                      <MenuItem
                        to="/"
                        onClick={() => {
                          logOut();
                        }}
                      >
                        Déconnexion
                      </MenuItem>
                    )}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

MenuListComposition.propTypes = {
  logOut: PropTypes.func.isRequired,
};
