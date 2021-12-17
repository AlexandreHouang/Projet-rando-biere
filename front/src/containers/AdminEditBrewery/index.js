import { connect } from 'react-redux';

import { updateBreweryFormField, updateBrewery } from 'src/actions/AdminAddBrewery';

// === Import Components
import AdminEditBrewery from 'src/components/AdminEditBrewery';

// === mapStateToProps
// If we need to read information in the state
const mapStateToProps = (state) => ({
  // Name of the prop to fill: element to retrieve in the state
  name: state.addBreweryReducer.name,
  mainImg: state.addBreweryReducer.mainImg,
  description: state.addBreweryReducer.description,
  region: state.addBreweryReducer.region,
  slug: state.addBreweryReducer.slug,
  adress: state.addBreweryReducer.adress,
  email: state.addBreweryReducer.email,
  phoneNumber: state.addBreweryReducer.phoneNumber,
  id: state.addBreweryReducer.id,
  redirectDashboard: state.addBreweryReducer.redirectDashboard,
  errorMessageForm: state.addBreweryReducer.errorMessageForm,
});

// === mapDispatchToProps
// If we need to dispatch actions to the store (modify the state)
const mapDispatchToProps = (dispatch) => ({
  // Name of the prop to fill: function which dispatches the action
  changeField: (newValue, name) => {
    const action = updateBreweryFormField(newValue, name);
    dispatch(action);
  },
  updateBrewery: (id) => {
    dispatch(updateBrewery(id));
  },
});

// === creation of the assistant
export default connect(mapStateToProps, mapDispatchToProps)(AdminEditBrewery);
