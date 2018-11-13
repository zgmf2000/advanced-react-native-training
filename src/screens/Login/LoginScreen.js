// @flow

import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextField, Button} from '../../core-ui';
import withCredentials from './withCredentials';

type Props = {
  username: string,
  password: string,
  onChangeText: (string) => (string) => void,
  onSubmit: () => void,
};

// eslint-disable-next-line
function LoginScreen(props: Props) {
  const {username, password, onChangeText, onSubmit} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextField
        placeholder="Username"
        value={username}
        onChangeText={onChangeText('username')}
      />
      <TextField
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={onChangeText('password')}
      />
      <Button text="Submit" onPress={onSubmit} />
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 12,
  },
});

export default withCredentials(LoginScreen);
