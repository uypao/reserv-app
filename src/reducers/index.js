import { combineReducers } from 'redux';
import { stack, drawer } from './NavReducer';
import AuthReducer from './AuthReducer';
import AccountFormReducer from './AccountFormReducer';
import VendorReducer from './VendorReducer';

export default combineReducers({
  stack,
  drawer,
  auth: AuthReducer,
  accountForm: AccountFormReducer,
  vendors: VendorReducer
});
