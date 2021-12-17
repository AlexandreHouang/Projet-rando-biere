import { connect } from 'react-redux';

// === Import Components
import HikingCardDetails from 'src/components/HikingCardDetails';
import { loadingHikingDetails } from 'src/actions/randobiere';

// === mapStateToProps
// If we need to read information in the state.
const mapStateToProps = (state) => ({
  // Prop's name to fill: element to retrieve in the state.
  hikingDetails: state.randobiere.hikingDetails,
});

// === mapDispatchToProps
// If we need to dispatch actions to the store (modify the state).
const mapDispatchToProps = (dispatch) => ({
  // Prop's name to fill: function who dispatch the action.
  loadingHikingDetails: (locationID) => {
    dispatch(loadingHikingDetails(locationID));
  },
});

// === Assistant creation
export default connect(mapStateToProps, mapDispatchToProps)(HikingCardDetails);
