import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import StackNavigation from '../stack/StackNavigation';
import Dashboard from '../../components/dashboard/DashboardPage';
import Sidebar from '../../components/common/Sidebar';
import Account from '../../components/account/AccountPage';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const routeConfiguration = DrawerNavigator({
  Dashboard: {
    screen: StackNavigation,
    navigationOptions: {
      drawerLabel: 'Dashboard',
      drawerIcon: ({ tintColor }) => (
        <FontAwesomeIcon name='dashboard' style={style.iconStyle}/>
      ),
    },
  },
  Account: {
    screen: StackNavigation,
    navigationOptions: {
      drawerLabel: 'Account',
      drawerIcon: ({ tintColor }) => (
        <MaterialIcon name='account-settings' style={style.iconStyle}/>
      ),
    },
  }
}, {
  contentComponent: props => <Sidebar {...props} />
});

const style = {
  iconStyle: {
    fontSize: 20
  }
}

export const Drawer = routeConfiguration;
