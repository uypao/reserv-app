import axios from 'axios';
import config from '../../config.json';
import {
  LOGIN_USER,
  LOGIN_USER_OAUTH,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  GO_TO_DASHBOARD,
  GO_TO_WELCOME
} from './types';
import { Linking, Platform } from 'react-native';
import SafariView from 'react-native-safari-view';

export const loginUser = ({ email, password }) => {
  let url = `${config.reservApi}/auth/signin`;
}

export const logoutUser = () => {
  let url = `${config.reservApi}/auth/signout`;
  return (dispatch) => {
    axios.post(url)
    .then((res) => {
      dispatch({ type: LOGOUT_USER_SUCCESS })
    })

    dispatch({ type: LOGOUT_USER })
  }
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

export const logoutUserSuccess = () => {
  return (dispatch) => {
    dispatch({ type: GO_TO_WELCOME })
  }
}
