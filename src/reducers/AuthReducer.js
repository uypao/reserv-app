import update from 'immutability-helper';
import {
  AUTH_INIT,
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_USER_OAUTH,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  USER_UPDATE_PROP
} from '../actions/types';

const INITIAL_STATE = {
  user: {},
  isAuthenticated: false,
  isLoading: false,
  error: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_INIT:
      return { ...state, ...INITIAL_STATE};
    case LOGIN_USER:
      return { ...state, error: null, isLoading: true }
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload,
        isAuthenticated: true,
        isLoading: false }
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload, isLoading: false }
    case USER_UPDATE_PROP:
      return update(state, {
        user: { [action.payload.prop]: {$set: action.payload.value}}
      });
    case LOGOUT_USER:
      return { ...state, user: {}, isAuthenticated: false }
    default:
      return state
  }
}
