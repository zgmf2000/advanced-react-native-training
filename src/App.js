// @flow

import * as React from 'react';
import withCounter from './screens/Counter/withCounter';
import withColorChanger from './screens/Color/withColorChanger';
import CounterComponent from './screens/Counter/CounterComponent';

type Props = {
  counter: number,
  color: string,
  onIncrement: () => void,
  onDecrement: () => void,
  onColorChange: () => void,
};

function App(props: Props) {
  const {counter, onIncrement, onDecrement, onColorChange, color} = props;
  return (
    <CounterComponent
      counter={counter}
      color={color}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onColorChange={onColorChange}
    />
  );
}

export default withColorChanger(withCounter(App));
