export const UPDATE_BREWERYFORM_FIELD = 'UPDATE_BREWERYFORM_FIELD';
export const SUBMIT_BREWERY_FORM = 'SUBMIT_BREWERY_FORM';
export const DELETE_BREWERY = 'DELETE_BREWERY';
export const MODIFY_BREWERY = 'MODIFY_BREWERY';
export const UPDATE_BREWERY = 'UPDATE_BREWERY';
export const CLEAN_STATE_BREWERY = 'CLEAN_STATE_BREWERY';
export const REDIRECT_DASHBOARD = 'REDIRECT_DASHBOARD';
export const DELETE_REDIRECT_DASHBOARD = 'DELETE_REDIRECT_DASHBOARD';
export const SHOW_MODAL_DELETE = 'SHOW_MODAL_DELETE';
export const CLOSE_MODAL_DELETE = 'CLOSE_MODAL_DELETE';
export const DISPLAY_ERROR_MESSAGE_FORM = 'DISPLAY_ERROR_MESSAGE_FORM';
export const DELETE_ERROR_MESSAGE_FORM = 'DELETE_ERROR_MESSAGE_FORM';

export const updateBreweryFormField = (newValue, name) => ({
  type: UPDATE_BREWERYFORM_FIELD,
  newValue: newValue,
  fieldName: name,
});

export const submitBreweryForm = () => ({
  type: SUBMIT_BREWERY_FORM,
});

export const deleteBrewery = (id) => ({
  type: DELETE_BREWERY,
  id,
});

export const modifyBrewery = (
  name,
  adress,
  region,
  description,
  email,
  phone_number,
  main_img,
  slug,
  id,
) => ({
  type: MODIFY_BREWERY,
  name,
  adress,
  region,
  description,
  email,
  phone_number,
  main_img,
  slug,
  id,
});

export const updateBrewery = (id) => ({
  type: UPDATE_BREWERY,
  id,
});

export const cleanStateBrewery = () => ({
  type: CLEAN_STATE_BREWERY,
});

export const redirectDashboard = () => ({
  type: REDIRECT_DASHBOARD,
});

export const deleteRedirectDashboard = () => ({
  type: DELETE_REDIRECT_DASHBOARD,
});

export const showModalDelete = (id, name) => ({
  type: SHOW_MODAL_DELETE,
  id,
  name,
});

export const closeModalDelete = () => ({
  type: CLOSE_MODAL_DELETE,
});

export const displayErrorMessageForm = (message) => ({
  type: DISPLAY_ERROR_MESSAGE_FORM,
  message,
});

export const deleteErrorMessageForm = () => ({
  type: DELETE_ERROR_MESSAGE_FORM,
});
