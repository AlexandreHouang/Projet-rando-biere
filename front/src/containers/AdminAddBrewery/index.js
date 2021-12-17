import { connect } from 'react-redux';

import { updateBreweryFormField, submitBreweryForm } from 'src/actions/AdminAddBrewery';

// import { addNewBrewery } from 'src/actions/auth';

// Import component of presentation.
import AdminAddBrewery from 'src/components/AdminAddBrewery';

// === mapStateToProps
// If we need to read information in the state.
const mapStateToProps = (state) => ({
  // Prop's name to fill: element to retrieve in the state.
  name: state.addBreweryReducer.name,
  mainImg: state.addBreweryReducer.mainImg,
  description: state.addBreweryReducer.description,
  region: state.addBreweryReducer.region,
  slug: state.addBreweryReducer.slug,
  adress: state.addBreweryReducer.adress,
  email: state.addBreweryReducer.email,
  phoneNumber: state.addBreweryReducer.phoneNumber,
  redirectDashboard: state.addBreweryReducer.redirectDashboard,
  errorMessageForm: state.addBreweryReducer.errorMessageForm,
});

// === mapDispatchToProps
// If we need to dispatch actions to the store (modify the state).
const mapDispatchToProps = (dispatch) => ({
  // Prop's name to fill: function who dispatch the action.
  changeField: (newValue, name) => {
    const action = updateBreweryFormField(newValue, name);
    dispatch(action);
  },
  handleLogin: () => {
    dispatch(submitBreweryForm());
  },
});

// === Assistant creation
export default connect(mapStateToProps, mapDispatchToProps)(AdminAddBrewery);
