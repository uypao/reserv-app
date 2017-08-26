import { StackNavigator } from 'react-navigation';

import Login from '../../components/login/LoginPage';
import Welcome from '../../components/welcome/WelcomePage';
import Dashboard from '../../components/dashboard/DashboardPage';
import Account from '../../components/account/AccountPage';
import AccountDetail from '../../components/account/AccountDetail';

const routeConfiguration = {
  Welcome: { screen: Welcome },
  Login: { screen: Login },
  Dashboard: { screen: Dashboard },
  Account: { screen: Account },
  AccountDetail: { screen: AccountDetail }
};

const stackNavigatorConfiguration = { headerMode: 'none'  };
export const Stack = StackNavigator(routeConfiguration, stackNavigatorConfiguration);
