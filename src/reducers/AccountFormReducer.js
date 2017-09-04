import { ACCOUNT_FORM_INIT,
  ACCOUNT_CREATE,
  ACCOUNT_CREATE_SUCCESS,
  ACCOUNT_CREATE_FAIL,
  ACCOUNT_UPDATE_PROP } from '../actions/types';

const INITIAL_STATE = {
    display_name: '',
    email: '',
    password: '',
    isLoading: false,
    error: null
  }

export default (state = INITIAL_STATE , action) => {
  switch (action.type) {
    case ACCOUNT_FORM_INIT:
      return { ...state, ...INITIAL_STATE }
    case ACCOUNT_CREATE:
      return { ...state, isLoading: true }
    case ACCOUNT_CREATE_SUCCESS:
      return { ...state, ...INITIAL_STATE, isLoading: false}
    case ACCOUNT_CREATE_FAIL:
      return { ...state, error: action.payload, isLoading: false}
    case ACCOUNT_UPDATE_PROP:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state;
  }
}
