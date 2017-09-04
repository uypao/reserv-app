import { StackNavigator } from 'react-navigation';

import Login from '../../components/login/LoginPage';
import Welcome from '../../components/welcome/WelcomePage';
import Dashboard from '../../components/dashboard/DashboardPage';
import Account from '../../components/account/AccountPage';
import AccountDetail from '../../components/account/AccountDetail';
import AccountCreate from '../../components/account/AccountCreate';
import Vendor from '../../components/vendor/VendorPage';
import VendorDetail from '../../components/vendor/detail/VendorPageDetail';
import Booking from '../../components/booking/BookingPage';

const routeConfiguration = {
  VendorList: { screen: Vendor },
  Welcome: { screen: Welcome },
  Login: { screen: Login },
  Dashboard: { screen: Dashboard },
  Account: { screen: Account },
  AccountDetail: { screen: AccountDetail },
  AccountCreate: { screen: AccountCreate },

  VendorDetail: { screen: VendorDetail },
  Booking: { screen: Booking }
};

const stackNavigatorConfiguration = { headerMode: 'none'  };
export const Stack = StackNavigator(routeConfiguration, stackNavigatorConfiguration);
