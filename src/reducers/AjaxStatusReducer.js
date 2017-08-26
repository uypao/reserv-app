import initialState from './initialState';
import {
  BEGIN_AJAX_CALL,
  END_AJAX_CALL
} from '../actions/types';

export default (state = initialState.ajaxStatus, action) => {
  switch (action.type) {
    case BEGIN_AJAX_CALL:
      return { ...state, isLoading: 1}
    case END_AJAX_CALL:
      return { ...state, isLoading: 0}
    default:
      return state
  }
}
