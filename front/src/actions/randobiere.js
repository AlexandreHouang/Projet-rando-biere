// === action types
export const CHANGE_REDIRECT_SEARCHBAR = 'CHANGE_REDIRECT_SEARCHBAR';
export const DELETE_REDIRECT_SEARCHBAR = 'DELETE_REDIRECT_SEARCHBAR';
export const LOADING_BREWERIES = 'LOADING_BREWERIES';
export const SAVE_BREWERIES = 'SAVE_BREWERIES'; // To register the breweries in the state
export const LOADING_BREWERY_DETAILS = 'LOADING_BREWERY_DETAILS'; // For a brewery details API Request
export const LOADING_HIKING_DETAILS = 'LOADING_HIKING_DETAILS'; // For a hike details API Request
export const SAVE_BREWERY = 'SAVE_BREWERY'; // To register a specific brewery in the state
export const SAVE_HIKE = 'SAVE_HIKE'; // To register a specific hike in the state
export const STOP_LOADER = 'STOP_LOADER'; // Stop the loader
export const START_LOADER = 'START_LOADER'; // Launch the loader
export const LOADING_BREWERIES_FILTER_OR_NOT = 'LOADING_BREWERIES_FILTER_OR_NOT'; // Every breweries if the region field is empty, and otherwise filtered breweries

// === action creators
export const changeRedirectSearchbar = (valueRedirect) => ({
  type: CHANGE_REDIRECT_SEARCHBAR,
  valueRedirect: valueRedirect,
});
export const deleteRedirectSearchbar = () => ({
  type: DELETE_REDIRECT_SEARCHBAR,
});
export const loadingBreweries = () => ({
  type: LOADING_BREWERIES,
});
export const saveBreweries = (breweries) => ({
  type: SAVE_BREWERIES,
  breweries: breweries,
});
export const loadingBreweryDetails = (locationID) => ({
  type: LOADING_BREWERY_DETAILS,
  id: locationID,
});
export const loadingHikingDetails = (locationID) => ({
  type: LOADING_HIKING_DETAILS,
  id: locationID,
});
export const saveBrewery = (brewery) => ({
  type: SAVE_BREWERY,
  brewery,
});
export const saveHike = (hike) => ({
  type: SAVE_HIKE,
  hike,
});
export const stopLoader = () => ({
  type: STOP_LOADER,
});
export const startLoader = () => ({
  type: START_LOADER,
});
export const loadingBreweriesFilterOrNot = (region) => ({
  type: LOADING_BREWERIES_FILTER_OR_NOT,
  region,
});
