// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

// == Import
import './modalDeleteBrewery.scss';

// == Composant
const ModalDeleteBrewery = ({
  closeModalDelete,
  deleteBrewery,
  idSelectedToDelete,
  nameSelectedToDelete,
}) => {
  const [open] = React.useState(true);

  const handleClose = () => {
    closeModalDelete();
  };

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Etes-vous sûr de vouloir supprimer cette brasserie "{nameSelectedToDelete}" ?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary" className="alert-dialog__cancel">
            Annuler
          </Button>
          <Button
            onClick={() => {
              // Delete the brewery with the id registered in the state
              deleteBrewery(idSelectedToDelete);
            }}
            className="alert-dialog__confirm"
            autoFocus
          >
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

ModalDeleteBrewery.propTypes = {
  closeModalDelete: PropTypes.func.isRequired,
  deleteBrewery: PropTypes.func.isRequired,
  idSelectedToDelete: PropTypes.number.isRequired,
  nameSelectedToDelete: PropTypes.string.isRequired,
};

// == Export
export default ModalDeleteBrewery;
