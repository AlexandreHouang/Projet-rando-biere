// == Import npm
import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import Field from './Field';

// == Import
import './adminEditBrewery.scss';

// == Composant
const AdminEditBrewery = ({
  changeField,
  updateBrewery,
  redirectDashboard,
  name,
  mainImg,
  description,
  region,
  slug,
  adress,
  email,
  phoneNumber,
  id,
  errorMessageForm,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    updateBrewery(id);
  };

  return (
    <div className="brewery-form">
      {redirectDashboard === true && <Redirect to="/admin" />}
      {redirectDashboard === false && (
        <>
          <form
            autoComplete="off"
            className="brewery-form-element"
            onSubmit={handleSubmit}
          >
            <Field
              name="name"
              placeholder="Nom"
              manageChange={changeField}
              value={name}
            />

            <Field
              name="mainImg"
              placeholder="Image principale"
              manageChange={changeField}
              value={mainImg}
            />

            <Field
              name="description"
              placeholder="Description"
              manageChange={changeField}
              value={description}
            />
            <Field
              name="region"
              placeholder="Région"
              manageChange={changeField}
              value={region}
            />
            <Field
              name="slug"
              placeholder="Slug"
              manageChange={changeField}
              value={slug}
            />
            <Field
              name="adress"
              placeholder="Adresse"
              manageChange={changeField}
              value={adress}
            />
            <Field
              name="email"
              placeholder="Email"
              manageChange={changeField}
              value={email}
            />
            <Field
              name="phoneNumber"
              placeholder="Téléphone"
              manageChange={changeField}
              value={`${phoneNumber}`} // Value of <Field /> component expects a string
            />
            <button
              type="submit"
              className="brewery-form-button"
            >
              OK
            </button>
          </form>
          {errorMessageForm !== '' && (
            <p className="errorMessage">
              {errorMessageForm}
            </p>
          )}
        </>
      )}
    </div>
  );
};

AdminEditBrewery.propTypes = {
  changeField: PropTypes.func.isRequired,
  updateBrewery: PropTypes.func.isRequired,
  redirectDashboard: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  mainImg: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  errorMessageForm: PropTypes.string.isRequired,
};

// == Export
export default AdminEditBrewery;
