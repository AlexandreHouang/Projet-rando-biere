import { connect } from 'react-redux';
import { logOut } from 'src/actions/auth';

// === Import Components
import SignOut from 'src/components/SignOut';

// === mapStateToProps
// If we need to read information in the state.
const mapStateToProps = (state) => ({
  // Prop's name to fill: element to retrieve in the state.
});

// === mapDispatchToProps
// If we need to dispatch actions to the store (modify the state).
const mapDispatchToProps = (dispatch) => ({
  // Prop's name to fill: function who dispatch the action.
  logOut: () => {
    dispatch(logOut());
  },
});

// === Assistant creation
export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
