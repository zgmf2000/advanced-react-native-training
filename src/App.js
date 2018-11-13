// @flow
import * as React from 'react';
import withColorChanger from './screens/Color/withColorChanger';
import CounterComponent from './screens/Counter/Counter';

type Props = {
  counter: number,
  color: string,
  onIncrement: () => void,
  onDecrement: () => void,
  onColorChange: () => void,
};

function App(props: Props) {
  const {counter, onIncrement, onDecrement, onColorChange, color} = props;
  return <CounterComponent color={color} onColorChange={onColorChange} />;
}

export default withColorChanger(App);
