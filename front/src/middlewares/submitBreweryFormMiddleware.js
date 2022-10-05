import axios from 'axios';

import {
  SUBMIT_BREWERY_FORM,
  DELETE_BREWERY,
  UPDATE_BREWERY,
  cleanStateBrewery,
  redirectDashboard,
  closeModalDelete,
  displayErrorMessageForm,
  deleteErrorMessageForm,
} from 'src/actions/AdminAddBrewery';

// Adress to indicate when we want to hit on the AWS Server
const SERVER_URL = 'http://ec2-52-91-79-84.compute-1.amazonaws.com:3500/v1';
// const SERVER_URL = 'http://localhost:5555/v1';

const submitBreweryFormMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case SUBMIT_BREWERY_FORM: {
      // We retrieve the state drawer
      const { auth } = store.getState();
      const { addBreweryReducer } = store.getState();
      // console.log('le token est', auth.token);
      axios.post(`${SERVER_URL}/brewery`, {
        name: addBreweryReducer.name,
        main_img: addBreweryReducer.mainImg,
        description: addBreweryReducer.description,
        region: addBreweryReducer.region,
        slug: addBreweryReducer.slug,
        adress: addBreweryReducer.adress,
        email: addBreweryReducer.email,
        phone_number: addBreweryReducer.phoneNumber,
        user_id: 1,
      },
      {
        headers: {
          Authorization: auth.token,
        },
      })
        .then((response) => {
          // Delete the previous message once the brewery added.
          store.dispatch(deleteErrorMessageForm());
          // Redirection on the Dashboard only if I have a 200 response
          store.dispatch(redirectDashboard());
        })
        .catch((error) => {
          // Error message sent in the state to be displayed beneath the form
          store.dispatch(displayErrorMessageForm(error.response.data));
        });
      break;
    }

    case DELETE_BREWERY: {
      // We retrieve the state drawer
      const { auth } = store.getState();
      // console.log('le token est', auth.token);
      axios.delete(`${SERVER_URL}/brewery/${action.id}`, {
        headers: {
          Authorization: auth.token,
        },
      })
        .then((response) => {
          console.log('response.data :', response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          // Close the suppression modal
          store.dispatch(closeModalDelete());
        })
      break;
    }

    case UPDATE_BREWERY: {
      // We retrieve the state drawer
      const { auth } = store.getState();
      const { addBreweryReducer } = store.getState();

      axios.patch(`${SERVER_URL}/brewery/${action.id}`, {
        id: action.id,
        name: addBreweryReducer.name,
        main_img: addBreweryReducer.mainImg,
        description: addBreweryReducer.description,
        region: addBreweryReducer.region,
        slug: addBreweryReducer.slug,
        adress: addBreweryReducer.adress,
        email: addBreweryReducer.email,
        phone_number: addBreweryReducer.phoneNumber,
        user_id: 1,
      },
      {
        headers: {
          Authorization: auth.token,
        },
      })
        .then((response) => {
          // Delete the previous message once the brewery has been edited
          store.dispatch(deleteErrorMessageForm());
          // Empty the form fields only if I have a 200 response
          store.dispatch(cleanStateBrewery());
          // Redirection on the Dashboard only if I have a 200 response
          store.dispatch(redirectDashboard());
        })
        .catch((error) => {
          // Error message sent in the state to be displayed beneath the form
          store.dispatch(displayErrorMessageForm(error.response.data));
        })
        .finally(() => {
        });
      break;
    }

    default:
  }

  // We give the action to the next middleware or reducer
  next(action);
};

export default submitBreweryFormMiddleware;
