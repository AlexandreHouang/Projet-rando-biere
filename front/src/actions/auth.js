// === action types
export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const LOG_OUT = 'LOG_OUT';
export const DISPLAY_ERROR_MESSAGE = 'DISPLAY_ERROR_MESSAGE';
export const DELETE_ERROR_MESSAGE = 'DELETE_ERROR_MESSAGE';

// === action creators
export const updateUserField = (newValue, fieldName) => ({
  type: UPDATE_USER_FIELD,
  newValue: newValue,
  fieldName: fieldName,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUser = (isLogged, token) => ({
  type: SAVE_USER,
  isLogged,
  token,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const displayErrorMessage = (message) => ({
  type: DISPLAY_ERROR_MESSAGE,
  message,
});

export const deleteErrorMessage = () => ({
  type: DELETE_ERROR_MESSAGE,
});
