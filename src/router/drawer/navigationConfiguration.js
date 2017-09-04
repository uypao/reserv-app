import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import StackNavigation from '../stack/StackNavigation';
import Dashboard from '../../components/dashboard/DashboardPage';
import Sidebar from '../../components/common/Sidebar';
import Account from '../../components/account/AccountPage';
import Vendor from '../../components/vendor/VendorPage';

const routeConfiguration = DrawerNavigator({
  Dashboard: { screen: StackNavigation },
  Account: { screen: StackNavigation },
  VendorList: { screen: StackNavigation }
}, {
  contentComponent: props => <Sidebar {...props} />
});

export const Drawer = routeConfiguration;
