// @flow

import * as React from 'react';
import {Provider} from 'react-redux';

import store from './store/createStore';
import MainNavigation from './navigation/NavigationReact';
type Props = {};
type State = {};
class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
  }
}

export default App;
