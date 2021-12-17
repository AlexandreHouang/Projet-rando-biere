import { combineReducers } from 'redux';

// We import the reducers
import authReducer from 'src/reducers/authReducer';
import randobiereReducer from 'src/reducers/randobiereReducer';
import addBreweryReducer from 'src/reducers/addBreweryReducer';

// The main reducer, which combines every other reducers
// combineReducers takes an Object as an argument, which describes the different state drawers and which reducer deals with which drawer
const rootReducer = combineReducers({
  // Drawer name: reducer that deals with this part of the state
  auth: authReducer,
  randobiere: randobiereReducer,
  addBreweryReducer: addBreweryReducer,
});

export default rootReducer;
