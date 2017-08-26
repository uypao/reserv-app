import {
  BEGIN_AJAX_CALL,
  END_AJAX_CALL
} from './types';

export const beginAjaxCall = () => {
  return { type: BEGIN_AJAX_CALL }
}

export const endAjaxCall = () => {
  return { type: END_AJAX_CALL }
}
