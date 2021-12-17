import { connect } from 'react-redux';
import { loadingBreweries, startLoader } from 'src/actions/randobiere';

// === Import Components
import BreweryCards from 'src/components/BreweryCards';

// === mapStateToProps
// If we need to read information in the state
const mapStateToProps = (state) => ({
  // Name of the prop to fill: element to retrieve in the state
  breweriesList: state.randobiere.breweriesList,
});

// === mapDispatchToProps
// If we need to dispatch actions to the store (modify the state)
const mapDispatchToProps = (dispatch) => ({
  // Name of the prop to fill: function which dispatches the action
  loadingBreweries: () => {
    dispatch(loadingBreweries());
  },
  startLoader: () => {
    dispatch(startLoader());
  },
});

// === creation of the assistant
export default connect(mapStateToProps, mapDispatchToProps)(BreweryCards);
