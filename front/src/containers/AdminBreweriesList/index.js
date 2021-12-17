import { connect } from 'react-redux';
import { modifyBrewery, showModalDelete } from 'src/actions/AdminAddBrewery';

// === Import Components
import AdminBreweriesList from 'src/components/AdminBreweriesList';

// === mapStateToProps
// If we need to read information in the state.
const mapStateToProps = (state) => ({
  // Prop's name to fill: element to retrieve in the state.
});

// === mapDispatchToProps
// If we need to dispatch actions to the store (modify the state).
const mapDispatchToProps = (dispatch) => ({
  // Prop's name to fill: function who dispatch the action.
  modifyBrewery: (
    name,
    adress,
    region,
    description,
    email,
    phone_number,
    main_img,
    slug,
    id,
  ) => {
    dispatch(modifyBrewery(
      name,
      adress,
      region,
      description,
      email,
      phone_number,
      main_img,
      slug,
      id,
    ));
  },

  showModalDelete: (id, name) => {
    dispatch(showModalDelete(id, name));
  },
});

// === Assistant creation
export default connect(mapStateToProps, mapDispatchToProps)(AdminBreweriesList);
