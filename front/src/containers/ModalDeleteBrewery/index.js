import { connect } from 'react-redux';
import { closeModalDelete, deleteBrewery } from 'src/actions/AdminAddBrewery';

// === Import Components
import ModalDeleteBrewery from 'src/components/ModalDeleteBrewery';

// === mapStateToProps
// If we need to read information in the state
const mapStateToProps = (state) => ({
  idSelectedToDelete: state.addBreweryReducer.idSelectedToDelete,
  nameSelectedToDelete: state.addBreweryReducer.nameSelectedToDelete,
});
// === mapDispatchToProps
// If we need to dispatch actions to the store (modify the state)
const mapDispatchToProps = (dispatch) => ({
  closeModalDelete: () => {
    dispatch(closeModalDelete());
  },
  deleteBrewery: (id, name) => {
    dispatch(deleteBrewery(id, name));
  },
});
// === creation of the assistant
export default connect(mapStateToProps, mapDispatchToProps)(ModalDeleteBrewery);
