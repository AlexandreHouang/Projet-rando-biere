import axios from 'axios';
import {
  LOADING_BREWERIES,
  saveBreweries,
  LOADING_BREWERY_DETAILS,
  saveBrewery,
  CHANGE_REDIRECT_SEARCHBAR,
  LOADING_HIKING_DETAILS,
  saveHike,
  stopLoader,
  LOADING_BREWERIES_FILTER_OR_NOT,
  deleteRedirectSearchbar,
} from 'src/actions/randobiere';

//const urlApi = 'http://ec2-3-85-243-18.compute-1.amazonaws.com:3500/v1';
const urlApi = 'http://localhost:5555/v1';

const randobiereMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // I want to send a request to the back API when the action is LOADING_BREWERIES.
    case LOADING_BREWERIES:
      axios.get(`${urlApi}/breweries`)
        .then((response) => {
          // I want to store response.data in the state
          store.dispatch(saveBreweries(response.data));
          // Stop the loader once the response received
          store.dispatch(stopLoader());
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    // I want to retrieve the details of a specific brewery
    case LOADING_BREWERY_DETAILS:
      axios.get(`${urlApi}/brewery/${action.id}`)
        .then((response) => {
          // I want to store response.data in the state (details of a brewery)
          store.dispatch(saveBrewery(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    // I want to retrieve the details of a specific hike
    case LOADING_HIKING_DETAILS:
      axios.get(`${urlApi}/hike/${action.id}`)
        .then((response) => {
          // I want to stock response.data in the state
          store.dispatch(saveHike(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    // Retrieve the breweries, either all of them if no region is indicated, but filtered otherwise
    case LOADING_BREWERIES_FILTER_OR_NOT:
      if (action.region === undefined) {
        axios.get(`${urlApi}/breweries`)
          .then((response) => {
          // I want to store response.data in the state
          store.dispatch(saveBreweries(response.data));
            // Stop the loader
            store.dispatch(stopLoader());
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            // Delete redirection
            store.dispatch(deleteRedirectSearchbar());
          });
        break;
      }
      axios.get(`${urlApi}/breweries?region=${action.region}`)
        .then((response) => {
          // I want to stock response.data in the state
          store.dispatch(saveBreweries(response.data));
            // Stop the loader
            store.dispatch(stopLoader());
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
            // Suppress redirection
            store.dispatch(deleteRedirectSearchbar());
        });
      break;

    default:
  }

  // We give the action to the next middleware or reducer
  next(action);
};
export default randobiereMiddleware;
