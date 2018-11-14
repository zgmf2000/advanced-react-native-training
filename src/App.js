// @flow

import * as React from 'react';
import {Provider} from 'react-redux';
import store from './store/createStore';
import CounterPage from './pages/CounterPage';

type Props = {};
type State = {
};

class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <CounterPage />
      </Provider>
    );
  }
}

export default App;
