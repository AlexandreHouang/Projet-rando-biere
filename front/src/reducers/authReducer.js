import {
  UPDATE_USER_FIELD,
  SAVE_USER, LOG_OUT,
  DISPLAY_ERROR_MESSAGE,
  DELETE_ERROR_MESSAGE,
} from 'src/actions/auth';

const initialState = {
  // Initial state here
  // Content of the email input
  email: '',
  // Content of the password input
  password: '',
  // indicate if the user is authentified
  logged: false,
  // token
  token: null,
  // Error message
  errorMessage: '',
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_FIELD:
      if (action.fieldName === 'email') {
        return {
          ...state,
          email: action.newValue,
        };
      }

      return {
        ...state,
        password: action.newValue,
      };

    case SAVE_USER:
      if (action.isLogged === 'auth_ok') {
        return {
          ...state,
          logged: true,
          token: action.token,
        };
      }
      return state;

    case LOG_OUT:
      return {
        ...state,
        logged: false,
      };

    case DISPLAY_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.message,
      };
    case DELETE_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: '',
      };

    default:
      return state;
  }
}

export default authReducer;
