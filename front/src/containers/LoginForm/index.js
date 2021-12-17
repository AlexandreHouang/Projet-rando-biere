import { connect } from 'react-redux';

import { updateUserField, logIn } from 'src/actions/auth';

// === Import Components
import LoginForm from 'src/components/LoginForm';

// === mapStateToProps
// If we need to read information in the state.
const mapStateToProps = (state) => ({
  // Prop's name to fill: element to retrieve in the state.
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.logged,
  errorMessage: state.auth.errorMessage,
});

// === mapDispatchToProps
// If we need to dispatch actions to the store (modify the state).
const mapDispatchToProps = (dispatch) => ({
  // Prop's name to fill: function who dispatch the action.
  changeField: (newValue, name) => {
    const action = updateUserField(newValue, name);
    dispatch(action);
  },
  handleLogin: () => {
    dispatch(logIn());
  },
});

// === Assistant creation
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
