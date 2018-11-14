// @flow

import type {InitialCounterState, Action} from '../../types';

const INITIAL_STATE: InitialCounterState = {
  counter: 0,
};

const CounterReducer = (
  state: InitialCounterState = INITIAL_STATE,
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

export default CounterReducer;
