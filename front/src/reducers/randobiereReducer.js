// === Import Actions
import {
  CHANGE_REDIRECT_SEARCHBAR,
  DELETE_REDIRECT_SEARCHBAR,
  SAVE_BREWERIES,
  SAVE_BREWERY,
  SAVE_HIKE,
  STOP_LOADER,
  START_LOADER,
} from 'src/actions/randobiere';

const initialState = {
  // Initial state
  redirectSearchbar: '', // stock the region, "Corse" for instance
  // TODO Perhaps one of the solutions could be to create 2 lists (breweriesList and brewerieListRegion)
  // Therefore if breweryListRegion is empty, display breweriesList
  breweriesList: [],
  breweryDetails: {},
  hikingDetails: {},
  loader: false,
};

function randobiereReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_REDIRECT_SEARCHBAR:
      return {
        ...state,
        redirectSearchbar: action.valueRedirect,
      };

    case DELETE_REDIRECT_SEARCHBAR:
      return {
        ...state,
        redirectSearchbar: '',
      };

    case SAVE_BREWERIES:
      return {
        ...state,
        breweriesList: action.breweries,
      };

    case SAVE_BREWERY:
      return {
        ...state,
        breweryDetails: action.brewery,
      };

    case SAVE_HIKE:
      return {
        ...state,
        hikingDetails: action.hike,
      };
    case STOP_LOADER:
      return {
        ...state,
        loader: false,
      };

    case START_LOADER:
      return {
        ...state,
        loader: true,
      };

    default:
      return state;
  }
}

export default randobiereReducer;
