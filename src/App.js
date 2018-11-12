// @flow

import * as React from 'react';
import {View, Text} from 'react-native';

type Props = {
  name: string,
};

function Greeting(props: Props) {
  return <Text>{props.name}</Text>;
}

function App() {
  return (
    <View>
      <Greeting name={'Juang'} />
    </View>
  );
}

export default App;
