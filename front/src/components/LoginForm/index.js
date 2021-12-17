// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './loginForm.scss';
import Field from './Field';

// == Component
const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  isLogged,
  loggedMessage,
  errorMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-form-button"
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (
        <>
          <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
            <Field
              name="email"
              placeholder="Adresse Email"
              manageChange={changeField}
              value={email}
            />
            <Field
              name="password"
              type="password"
              placeholder="Mot de passe"
              manageChange={changeField}
              value={password}
            />
            <button
              type="submit"
              className="login-form-button"
            >
              OK
            </button>
          </form>
          {errorMessage !== '' && (
            <p className="errorMessage">
              {errorMessage}
            </p>
          )}
        </>
      )}
    </div>
  );
};

LoginForm.propTypes = {
  /** value for the email */
  email: PropTypes.string.isRequired,
  /** value for the password */
  password: PropTypes.string.isRequired,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  changeField: PropTypes.func.isRequired,
  /** called when the form is submitted */
  handleLogin: PropTypes.func.isRequired,
  /** toggle between "connected" or "not connected" */
  isLogged: PropTypes.bool,
  /** message displayed when "connected" */
  loggedMessage: PropTypes.string,
  errorMessage: PropTypes.string.isRequired,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

// == Export
export default LoginForm;
