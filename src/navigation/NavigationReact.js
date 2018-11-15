// @flow

import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import {
  Dashboard,
  Login,
  Authentication,
  AddTransaction,
  Chart,
} from '../screens';

const DashboardStackNavigator = createStackNavigator({
  Dashboard,
  Chart,
});

const AddTransactionStack = createStackNavigator({
  Transaction: AddTransaction,
});

const MainNavigation = createSwitchNavigator({
  Authentication,
  Login,
  Dashboard: DashboardStackNavigator,
});

export default MainNavigation;
