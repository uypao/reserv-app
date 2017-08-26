import { NavigationActions } from 'react-navigation';
import { Stack } from '../router/stack/navigationConfiguration';
import { Drawer } from '../router/drawer/navigationConfiguration';
import { BACK,
  TOGGLE_DRAWER,
  GO_TO_WELCOME,
  GO_TO_LOGIN,
  GO_TO_DASHBOARD,
  GO_TO_ACCOUNT,
  GO_TO_ACCOUNT_DETAIL } from '../actions/types';

export function stack(state, action) {
  switch (action.type) {
    case BACK: {
      const navigationAction = NavigationActions.back({});
      return Stack.router.getStateForAction(navigationAction, state);
    }
    case GO_TO_WELCOME: {
      const navigationAction = NavigationActions.navigate({
        routeName: 'Welcome',
        params: { ...action.payload },
      });
      return Stack.router.getStateForAction(navigationAction, state);
    }
    case GO_TO_LOGIN: {
      const navigationAction = NavigationActions.navigate({
        routeName: 'Login',
        params: { ...action.payload },
      });
      return Stack.router.getStateForAction(navigationAction, state);
    }
    case GO_TO_DASHBOARD: {
      const navigationAction = NavigationActions.navigate({
        routeName: 'Dashboard',
        params: { ...action.payload },
      });
      return Stack.router.getStateForAction(navigationAction, state);
    }
    case GO_TO_ACCOUNT: {
      const navigationAction = NavigationActions.navigate({
        routeName: 'Account',
        params: { ...action.payload },
      });
      return Stack.router.getStateForAction(navigationAction, state);
    }
    case GO_TO_ACCOUNT_DETAIL: {
      const navigationAction = NavigationActions.navigate({
        routeName: 'AccountDetail',
        params: { ...action.payload },
      });
      return Stack.router.getStateForAction(navigationAction, state);
    }
    default:
      return Stack.router.getStateForAction(action, state);
  }
}

const initialNavState = Drawer.router.getStateForAction(
  Drawer.router.getActionForPathAndParams('DrawerClose'));

export function drawer(state = initialNavState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER: {
      const navigationAction = NavigationActions.navigate({
        routeName: state.routes[state.index].routeName === 'DrawerOpen' ? 'DrawerClose' : 'DrawerOpen',
      });
      return Drawer.router.getStateForAction(navigationAction, state);
    }
    default:
      return Drawer.router.getStateForAction(action, state) || state;
  }
}
