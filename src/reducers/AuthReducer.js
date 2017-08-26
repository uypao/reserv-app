import initialState from './initialState';
import {
  LOGIN_USER,
  LOGIN_USER_OAUTH,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../actions/types';

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case LOGIN_USER:

    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload }
    default:
      return state

  }
}
