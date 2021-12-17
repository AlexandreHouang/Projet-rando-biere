import { connect } from 'react-redux';

// === Import Components
import HikingCards from 'src/components/HikingCards';

// === mapStateToProps
// If we need to read information in the state.
const mapStateToProps = (state) => ({
  // Prop's name to fill: element to retrieve in the state.
  breweryDetails: state.randobiere.breweryDetails,
});

// === mapDispatchToProps
// If we need to dispatch actions to the store (modify the state).
const mapDispatchToProps = (dispatch) => ({
  // Prop's name to fill: function who dispatch the action.
});

// === Assistant creation
export default connect(mapStateToProps, mapDispatchToProps)(HikingCards);
