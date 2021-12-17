// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

// == Import material
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';

// == Import data
import franceRegion from './dataRegionsFrance';

// == Import css
import './searchbar.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

// == Composant
const Searchbar = ({
  redirectSearchbar,
  changeRedirect,
}) => {
  // I build my new url in case I need it for the redirect
  const urlRedirect = `/brasseries?region=${redirectSearchbar}`;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="searchbar">
      {/* In the state, if I have a redirection information (recorded after clicking on a region
      in the searchbar) so I do a redirect on the brewery page (which will be filtered) */}
      {redirectSearchbar !== '' && (
        <Redirect to={urlRedirect} />
      )}
      {redirectSearchbar === '' && (
        <>
          <p className="searchbar__description">Je cherche une brasserie en région...</p>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          >
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Régions" />
              {/* If the drop-down list is open then the "open arrow" is directed upwards
              otherwise it is directed downwards */}
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>

              <List component="div" disablePadding>
                {franceRegion.map((region) => (
                  <ListItem
                    button
                    className={classes.nested}
                    key={region.id}
                    onClick={(event) => {
                      handleClick();
                      changeRedirect(event.target.textContent);
                    }}
                  >
                    <ListItemText
                      primary={region.name}
                    />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </List>
        </>
      )}
    </div>
  );
};

Searchbar.propTypes = {
  redirectSearchbar: PropTypes.string.isRequired,
  changeRedirect: PropTypes.func.isRequired,
};

// == Export
export default Searchbar;
