import {
  UPDATE_BREWERYFORM_FIELD,
  MODIFY_BREWERY,
  CLEAN_STATE_BREWERY,
  REDIRECT_DASHBOARD,
  DELETE_REDIRECT_DASHBOARD,
  SHOW_MODAL_DELETE,
  CLOSE_MODAL_DELETE,
  DISPLAY_ERROR_MESSAGE_FORM,
  DELETE_ERROR_MESSAGE_FORM,
} from 'src/actions/AdminAddBrewery';

const initialState = {
  // Content of the different inputs
  name: '',
  mainImg: '',
  description: '',
  region: '',
  slug: '',
  adress: '',
  email: '',
  phoneNumber: '',
  id: '',
  redirectDashboard: false,
  viewModalDelete: false,
  idSelectedToDelete: '',
  nameSelectedToDelete: '',
  errorMessageForm: '',
};

function addBreweryReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_BREWERYFORM_FIELD:
      if (action.fieldName === 'name') {
        return {
          ...state,
          name: action.newValue,
        };
      }
      if (action.fieldName === 'mainImg') {
        return {
          ...state,
          mainImg: action.newValue,
        };
      }
      if (action.fieldName === 'description') {
        return {
          ...state,
          description: action.newValue,
        };
      }
      if (action.fieldName === 'region') {
        return {
          ...state,
          region: action.newValue,
        };
      }
      if (action.fieldName === 'slug') {
        return {
          ...state,
          slug: action.newValue,
        };
      }
      if (action.fieldName === 'adress') {
        return {
          ...state,
          adress: action.newValue,
        };
      }
      if (action.fieldName === 'email') {
        return {
          ...state,
          email: action.newValue,
        };
      }
      if (action.fieldName === 'phoneNumber') {
        return {
          ...state,
          phoneNumber: action.newValue,
        };
      }
      return state;

    case MODIFY_BREWERY:
      return {
        ...state,
        name: action.name,
        adress: action.adress,
        region: action.region,
        description: action.description,
        email: action.email,
        phoneNumber: `${action.phone_number}`, // String awaited
        mainImg: action.main_img,
        slug: action.slug,
        id: `${action.id}`, // String awaited
      };

    case CLEAN_STATE_BREWERY:
      return {
        ...state,
        name: '',
        mainImg: '',
        description: '',
        region: '',
        slug: '',
        adress: '',
        email: '',
        phoneNumber: '',
        id: '',
      };

    case REDIRECT_DASHBOARD:
      return {
        ...state,
        redirectDashboard: true,
      };

    case DELETE_REDIRECT_DASHBOARD:
      return {
        ...state,
        redirectDashboard: false,
      };

    case SHOW_MODAL_DELETE:
      return {
        ...state,
        viewModalDelete: true,
        idSelectedToDelete: action.id,
        nameSelectedToDelete: action.name,
      };

    case CLOSE_MODAL_DELETE:
      return {
        ...state,
        viewModalDelete: false,
      };

    case DISPLAY_ERROR_MESSAGE_FORM:
      return {
        ...state,
        errorMessageForm: action.message,
      };

    case DELETE_ERROR_MESSAGE_FORM:
      return {
        ...state,
        errorMessageForm: '',
      };

    default:
      return state;
  }
}

export default addBreweryReducer;
