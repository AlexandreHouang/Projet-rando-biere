import { connect } from 'react-redux';

// === Import Components
import BreweryCardDetails from 'src/components/BreweryCardDetails';

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
});

// === creation of the assistant
export default connect(mapStateToProps, mapDispatchToProps)(BreweryCardDetails);
