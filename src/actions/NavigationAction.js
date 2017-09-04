import { BACK,
  TOGGLE_DRAWER,
  GO_TO_WELCOME,
  GO_TO_LOGIN,
  GO_TO_DASHBOARD,
  GO_TO_ACCOUNT,
  GO_TO_ACCOUNT_DETAIL,
  GO_TO_ACCOUNT_CREATE,
  GO_TO_VENDOR_LIST,
  GO_TO_VENDOR_DETAIL,
  GO_TO_BOOKING } from './types';

export const back = () => {
  return { type: BACK };
}

export const toggleDrawer = () => {
  return { type: TOGGLE_DRAWER };
}

export const goToWelcome = () => {
  return { type: GO_TO_WELCOME };
}

export const goToLogin = () => {
  return { type: GO_TO_LOGIN };
}

export const goToDashboard = () => {
  return { type: GO_TO_DASHBOARD }
}

export const goToAccount = () => {
  return { type: GO_TO_ACCOUNT }
}

export const goToAccountDetail = () => {
  return { type: GO_TO_ACCOUNT_DETAIL }
}

export const goToAccountCreate = () => {
  return { type: GO_TO_ACCOUNT_CREATE }
}

export const goToVendorList = () => {
  return { type: GO_TO_VENDOR_LIST }
}

export const goToVendorDetail = (id) => {
  return {
    type: GO_TO_VENDOR_DETAIL,
    payload: { id }}
}

export const goToBooking = () => {
  return { type: GO_TO_BOOKING }
}
