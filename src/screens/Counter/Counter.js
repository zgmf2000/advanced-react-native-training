// @flow

import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from '../../reduct/react-reduct';
import {Text} from '../../core-ui';

type Props = {
  onIncrement: () => void,
  onDecrement: () => void,
  counter: number,
};

type CounterState = {
  counter: number,
};

type Action = {
  [key: string]: mixed,
};

export const COUNTER_INITIAL_STATE = {
  counter: 0,
};

export const counterReducer = (
  state: CounterState = COUNTER_INITIAL_STATE,
  action: Action,
) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case 'DECREMENT': {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    default: {
      return state;
    }
  }
};

class Counter extends Component<Props> {
  render() {
    const {onIncrement, onDecrement, counter} = this.props;
    return (
      <View style={styles.root}>
        <TouchableOpacity style={styles.button} onPress={onIncrement} />
        <Text style={styles.counterText}>{counter}</Text>
        <TouchableOpacity style={styles.button} onPress={onDecrement} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch({type: 'INCREMENT'}),
  onDecrement: () => dispatch({type: 'DECREMENT'}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

let styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ffc425',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    width: '100%',
  },
  counterText: {
    fontSize: 130,
    color: 'white',
  },
});
