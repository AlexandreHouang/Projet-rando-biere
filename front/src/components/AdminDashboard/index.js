// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import components
import BreweriesAddButton from 'src/components/BreweriesAddButton';
import AdminBreweriesList from 'src/containers/AdminBreweriesList';
import ModalDeleteBrewery from 'src/containers/ModalDeleteBrewery';

// == Import
import './adminDashboard.scss';

// == Composant
const AdminDashboard = ({
  loadingBreweries,
  breweriesList,
  cleanStateBrewery,
  deleteRedirectDashboard,
  viewModalDelete,
}) => {
  /* Each time a component is loading and when viewModalDelete have modification,
  i want to activate the loadingBreweries action (action who use axios to call the bac API) */
  useEffect(() => {
    loadingBreweries();
    cleanStateBrewery();
    deleteRedirectDashboard();
  }, [viewModalDelete]);

  return (
    <div className="adminDashboard">
      <h1>Dashboard des brasseries</h1>
      <BreweriesAddButton />

      {/* Here I want to retrieve information from the state to use a map function.
      The state's information comes from a connection to back API (loadingBreweries) */}
      {breweriesList.map((brewery) => (
        <AdminBreweriesList key={brewery.id} {...brewery} />
      ))}
      {viewModalDelete === true && <ModalDeleteBrewery />}
    </div>
  );
};

AdminDashboard.propTypes = {
  loadingBreweries: PropTypes.func.isRequired,
  cleanStateBrewery: PropTypes.func.isRequired,
  deleteRedirectDashboard: PropTypes.func.isRequired,
  breweriesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  viewModalDelete: PropTypes.bool.isRequired,
};

// == Export
export default AdminDashboard;
