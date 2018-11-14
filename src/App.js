// @flow

import * as React from 'react';
import {combineReducers, createStore} from './reduct/reduct';
import Counter, {
  counterReducer,
  COUNTER_INITIAL_STATE,
} from './screens/Counter/Counter';
import {Provider} from './reduct/react-reduct';

type Props = {};

const reducers = combineReducers({counter: counterReducer});
const store = createStore(reducers);

// eslint-disable-next-line
function App(props: Props) {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
