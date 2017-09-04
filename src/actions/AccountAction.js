import { ACCOUNT_FORM_INIT,
  ACCOUNT_CREATE,
  ACCOUNT_CREATE_SUCCESS,
  ACCOUNT_CREATE_FAIL,
  ACCOUNT_UPDATE_PROP,
  LOGIN_USER_SUCCESS,
  GO_TO_DASHBOARD } from './types';
import axios from 'axios';
import config from '../../config.json';

export const accountFormInit = () => {
  return { type: ACCOUNT_FORM_INIT }
}

export const accountCreate = ({ display_name, email, password }) => {
  let url = `${config.reservApi}/auth/signup`;
  return (dispatch) => {
    dispatch({ type: ACCOUNT_CREATE });
    axios.post(url, {
      display_name, email, password
    })
    .then(() => {
      dispatch(accountCreateSuccess({ display_name, email, password }));
    })
    .catch((err) => {
      let error = err.response.data;
      dispatch(accountCreateFail(error.message))
    });
  }
};

export const accountCreateSuccess = ({ display_name, email, password }) => {
  return (dispatch) => {
    dispatch({ type: ACCOUNT_CREATE_SUCCESS })
    dispatch({ type: GO_TO_DASHBOARD })
    {/* call login success to set the current user*/}
    dispatch({ type: LOGIN_USER_SUCCESS,
      payload: { display_name, email, password }})
  }
}

export const accountCreateFail = (message) => {
  return { type: ACCOUNT_CREATE_FAIL, payload: message }
}

export const accountUpdateProp = ({ prop, value }) => {
  return {
    type: ACCOUNT_UPDATE_PROP,
    payload: { prop, value }
  };
};
