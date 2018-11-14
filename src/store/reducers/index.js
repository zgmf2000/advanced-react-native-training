// @flow

import {combineReducers} from 'redux';

export type InitialState = {
  counter: number;
};

export type Action =
  | {
      type: 'PLUS_NUMBER';
    }
  | {
      type: 'MIN_NUMBER';
    };

const INITIAL_STATE: InitialState = {
  counter: 0,
};

const CounterReducer = (
  state: InitialState = INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case 'PLUS_NUMBER':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'MIN_NUMBER':
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default combineReducers({counter: CounterReducer});
