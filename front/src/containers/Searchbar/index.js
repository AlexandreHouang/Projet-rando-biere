import { connect } from 'react-redux';

// === Import Local
import { changeRedirectSearchbar } from 'src/actions/randobiere';

// === Import Components
import Searchbar from 'src/components/Searchbar';

// === mapStateToProps
// If we need to read information in the state
const mapStateToProps = (state) => ({
  // Name of the prop to fill: element to retrieve in the state
  redirectSearchbar: state.randobiere.redirectSearchbar,
});

// === mapDispatchToProps
// If we need to dispatch actions to the store (modify the state)
const mapDispatchToProps = (dispatch) => ({
  // Name of the prop to fill: function which dispatches the action
  changeRedirect: (valueRedirect) => {
    dispatch(changeRedirectSearchbar(valueRedirect));
  },
});

// === creation of the assistant
export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
