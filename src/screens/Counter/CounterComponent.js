// @flow

import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

type Props = {
  counter: number,
  color: string,
  onIncrement: () => void,
  onDecrement: () => void,
  onColorChange: () => void,
};

function Counter(props: Props) {
  const {counter, onIncrement, onDecrement, color, onColorChange} = props;
  return (
    <View style={[styles.root, {backgroundColor: color}]}>
      <TouchableOpacity style={styles.button} onPress={onIncrement} />
      <TouchableOpacity style={styles.button} onPress={onColorChange}>
        <Text style={styles.counterText}>{counter}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onDecrement} />
    </View>
  );
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
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

export default Counter;
