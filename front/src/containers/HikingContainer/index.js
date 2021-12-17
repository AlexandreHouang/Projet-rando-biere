import { connect } from 'react-redux';
import { loadingHikingDetails } from 'src/actions/randobiere';

// === Import Components
import HikingContainer from 'src/components/HikingContainer';

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
export default connect(mapStateToProps, mapDispatchToProps)(HikingContainer);
