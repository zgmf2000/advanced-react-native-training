// @flow

import {combineReducers} from 'redux';
import CounterReducer from './CounterReducer';
import TransactionReducer from './TransactionReducer';

export default combineReducers({
  counter: CounterReducer,
  transactions: TransactionReducer,
});
