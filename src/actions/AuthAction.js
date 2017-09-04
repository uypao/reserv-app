import axios from 'axios';
import config from '../../config.json';
import {
  AUTH_INIT,
  LOGIN_USER,
  LOGIN_USER_OAUTH,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  USER_UPDATE_PROP,
  GO_TO_DASHBOARD,
  GO_TO_WELCOME
} from './types';
import { Linking, Platform } from 'react-native';
import SafariView from 'react-native-safari-view';

export const authInit = () => {
  return { type: AUTH_INIT }
}

export const loginUser = ({ email, password }) => {
  let url = `${config.reservApi}/auth/signin`;
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    axios.post(url, {
      email, password
    })
    .then((res) => {
      let user = res.data.message;
      dispatch(loginUserSuccess(user));
    })
    .catch((err) => {
      let error = err.response.data;
      dispatch(loginUserFail(error.message));
    })
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_USER })
    dispatch({ type: GO_TO_WELCOME })
  }
}

export const userUpdateProp = ({ prop, value}) => {
  return {
    type: USER_UPDATE_PROP,
    payload: { prop, value }
  };
}

export const loginUserOauth = (provider) => {
  let url = `${config.reservApi}/auth`;
  url = provider == 'facebook' ? `${url}/facebook` : `${url}/google`
  switch (Platform.OS) {
    case 'ios':
      SafariView.show({
        url: url,
        fromBottom: true,
      });
      break;
    case 'android':
      Linking.openURL(url);
      break;
    default:
      break;
  }
  return { type: LOGIN_USER }
}

export const loginUserSuccess = (user) => {
  return (dispatch) => {
    switch (Platform.OS) {
      case 'ios':
        SafariView.dismiss();
        break;
      default:
        break;
    }
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
    dispatch({ type: GO_TO_DASHBOARD });
  };
}

export const loginUserFail = (message) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL, payload: message})
  }
}

export const logoutUserSuccess = () => {
  return (dispatch) => {
    dispatch({ type: GO_TO_WELCOME })
  }
}
