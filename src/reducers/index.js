import { combineReducers } from 'redux';
import AjaxStatusReducer from './AjaxStatusReducer';
import AuthReducer from './AuthReducer';
import { stack, drawer } from './NavReducer';

export default combineReducers({
  ajaxStatus: AjaxStatusReducer,
  auth: AuthReducer,
  stack,
  drawer
});
