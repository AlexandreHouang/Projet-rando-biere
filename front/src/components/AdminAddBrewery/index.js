// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import Field from './Field';

// == Import
import './adminAddBrewery.scss';

// == Component
const AdminAddBrewery = ({
  // addNewBrewery,
  changeField,
  handleLogin,
  // handleLogout,
  name,
  mainImg,
  description,
  redirectDashboard,
  region,
  slug,
  adress,
  email,
  phoneNumber,
  errorMessageForm,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

  return (
    <div className="brewery-form">
      {redirectDashboard === true && <Redirect to="/admin" />}
      {redirectDashboard === false && (
        <>
          <form autoComplete="off" className="brewery-form-element" onSubmit={handleSubmit}>
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
              value={phoneNumber}
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

AdminAddBrewery.propTypes = {
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  mainImg: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  redirectDashboard: PropTypes.bool.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  errorMessageForm: PropTypes.string.isRequired,
};

// == Export
export default AdminAddBrewery;
