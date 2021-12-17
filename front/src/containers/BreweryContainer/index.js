import { connect } from 'react-redux';
import { loadingBreweryDetails } from 'src/actions/randobiere';

// === Import Components
import BreweryContainer from 'src/components/BreweryContainer';

// === mapStateToProps
// If we need to read information in the state
const mapStateToProps = (state) => ({
  // Name of the prop to fill: element to retrieve in the state
  breweryDetails: state.randobiere.breweryDetails,
});

// === mapDispatchToProps
// If we need to dispatch actions to the store (modify the state)
const mapDispatchToProps = (dispatch) => ({
  // Name of the prop to fill: function which dispatches the action
  loadingBreweryDetails: (locationID) => {
    dispatch(loadingBreweryDetails(locationID));
  },
});

// === creation of the assistant
export default connect(mapStateToProps, mapDispatchToProps)(BreweryContainer);
