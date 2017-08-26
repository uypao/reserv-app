import { BACK,
  TOGGLE_DRAWER,
  GO_TO_WELCOME,
  GO_TO_LOGIN,
  GO_TO_DASHBOARD,
  GO_TO_ACCOUNT,
  GO_TO_ACCOUNT_DETAIL } from './types';

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
