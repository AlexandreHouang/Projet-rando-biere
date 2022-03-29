import axios from 'axios';

import {
  LOG_IN,
  saveUser,
  displayErrorMessage,
  deleteErrorMessage,
} from 'src/actions/auth';

const SERVER_URL = 'https://ec2-54-225-0-75.compute-1.amazonaws.com:3500/v1';
//const SERVER_URL = 'http://ec2-3-85-243-18.compute-1.amazonaws.com:3500/v1';
//const SERVER_URL = 'http://localhost:5555/v1';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      // We retrieve the state drawer
      const { auth } = store.getState();

      axios.post(`${SERVER_URL}/login`, {
        email: auth.email,
        password: auth.password,
      })
        .then((response) => {
          const actionSaveUser = saveUser(
            response.data,
            response.headers.authorization,
          );
          store.dispatch(actionSaveUser);
          // I empty the error message if I connected successfuly
          store.dispatch(deleteErrorMessage());
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(displayErrorMessage('Adresse e-mail ou mot de passe non valide, veuillez réessayer'));
        });
      break;
    }

    default:
  }
  // We give the action to the next middleware or reducer
  next(action);
};

export default authMiddleware;
