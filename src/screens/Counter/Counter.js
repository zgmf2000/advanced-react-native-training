// @flow

import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {Text} from '../../core-ui';

type Props = {
  color: string,
  onColorChange: () => void,
};

type State = {
  counter: number,
};

let reducer = (action) => (state) => {
  switch (action.type) {
    case 'Increment': {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case 'Decrement': {
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

export default class Counter extends Component<Props, State> {
  state = {
    counter: 0,
  };

  render() {
    const {color, onColorChange} = this.props;

    return (
      <View style={[styles.root, {backgroundColor: color}]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.dispatch({type: 'Increment'});
          }}
        />
        <TouchableOpacity style={styles.button} onPress={onColorChange}>
          <Text style={styles.counterText}>{this.state.counter}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.dispatch({type: 'Decrement'});
          }}
        />
      </View>
    );
  }

  dispatch = (action: any) => {
    this.setState(reducer(action));
  };
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ffc425',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  counterText: {
    fontSize: 130,
    color: 'white',
  },
});