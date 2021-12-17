import { connect } from 'react-redux';

// === Import Components
import RandoBiere from 'src/components/RandoBiere';

// === mapStateToProps
// If we need to read information in the state.
const mapStateToProps = (state) => ({
  // Prop's name to fill: element to retrieve in the state.
  logged: state.auth.logged,
});
// === mapDispatchToProps
// If we need to dispatch actions to the store (modify the state).
const mapDispatchToProps = (dispatch) => ({
  // Prop's name to fill: function who dispatch the action.
});
// === Assistant creation
export default connect(mapStateToProps, mapDispatchToProps)(RandoBiere);
