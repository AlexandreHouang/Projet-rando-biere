import { connect } from 'react-redux';

// === Import Components
import BreweryMain from 'src/components/BreweryMain';

// === mapStateToProps
// If we need to read information in the state
const mapStateToProps = (state) => ({
  // Name of the prop to fill: element to retrieve in the state
  breweriesList: state.randobiere.breweriesList,
  loader: state.randobiere.loader,
});

// === mapDispatchToProps
// If we need to dispatch actions to the store (modify the state)
const mapDispatchToProps = (dispatch) => ({
});

// === creation of the assistant
export default connect(mapStateToProps, mapDispatchToProps)(BreweryMain);
