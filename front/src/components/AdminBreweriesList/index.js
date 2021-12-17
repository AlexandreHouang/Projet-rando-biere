// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './adminBreweriesList.scss';
import eyes from 'src/assets/images/eyes.svg';
import edit from 'src/assets/images/edit.svg';
import trash from 'src/assets/images/trash.svg';
import eyes_hover from 'src/assets/images/eyes_hover.svg';
import edit_hover from 'src/assets/images/edit_hover.svg';
import trash_hover from 'src/assets/images/trash_hover.svg';

// == Composant
const AdminBreweriesList = ({
  id,
  name,
  adress,
  region,
  description,
  email,
  phone_number,
  main_img,
  slug,
  modifyBrewery,
  showModalDelete,
}) => (
  <>
    <article className="adminBreweriesList">
      <li>
        <div className="breweryNameRegion">
          <p>{name}</p>
          <p>{region}</p>
        </div>

        <div className="icon">
          <Link to={`/brasseries/${id}`} target="_blank">
            <img src={eyes} className="eyes" alt="eyes" />
            <img src={eyes_hover} className="eyes_hover" alt="eyes_hover" />
          </Link>

          <Link
            to="/admin/brasserie-edit"
            onClick={() => {
              // On click I want to save the name, description etc. values in the state
              // from the brewery.
              // So, in the controlled fields, there will already be information.
              modifyBrewery(
                name,
                adress,
                region,
                description,
                email,
                phone_number,
                main_img,
                slug,
                id,
              );
            }}
          >
            <img src={edit} className="edit" alt="edit" />
            <img src={edit_hover} className="edit_hover" alt="edit_hover" />
          </Link>

          <button
            type="button"
            onClick={() => {
              // Parameter ID for axios DELETE request and parameter name to display in the modal
              // the brewery's name that is about to be deleted.
              showModalDelete(id, name);
            }}
          >
            <img src={trash} className="trash" alt="trash" />
            <img src={trash_hover} className="trash_hover" alt="trash_hover" />
          </button>
        </div>
      </li>
    </article>
  </>
);

AdminBreweriesList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone_number: PropTypes.number.isRequired,
  main_img: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  modifyBrewery: PropTypes.func.isRequired,
  showModalDelete: PropTypes.func.isRequired,
};
// == Export
export default AdminBreweriesList;
