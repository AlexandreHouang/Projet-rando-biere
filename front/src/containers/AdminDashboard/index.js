import { connect } from 'react-redux';
import { loadingBreweries } from 'src/actions/randobiere';
import { cleanStateBrewery, deleteRedirectDashboard } from 'src/actions/AdminAddBrewery';

// === Import Components
import AdminDashboard from 'src/components/AdminDashboard';

// === mapStateToProps
// If we need to read information in the state.
const mapStateToProps = (state) => ({
  // Prop's name to fill: element to retrieve in the state.
  breweriesList: state.randobiere.breweriesList,
  viewModalDelete: state.addBreweryReducer.viewModalDelete,
});

// === mapDispatchToProps
// If we need to dispatch actions to the store (modify the state).
const mapDispatchToProps = (dispatch) => ({
  // Prop's name to fill: function who dispatch the action.
  loadingBreweries: () => {
    dispatch(loadingBreweries());
  },
  cleanStateBrewery: () => {
    dispatch(cleanStateBrewery());
  },
  deleteRedirectDashboard: () => {
    dispatch(deleteRedirectDashboard());
  },
});

// === Assistant creation
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
