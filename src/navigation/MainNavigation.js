// @flow
import React from 'react';

import Navigator from './components/Navigator';
import {
  Chart,
  Login,
  Authentification,
  AddTransaction,
  Dashboard,
} from '../screens';

const MainNavigation = () => {
  return (
    <Navigator>
      <Authentification />
      <Chart />
      <AddTransaction />
      <Dashboard />
      <Login />
    </Navigator>
  );
};

export default MainNavigation;
