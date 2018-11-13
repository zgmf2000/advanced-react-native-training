// @flow

import * as React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {TextField, Button} from '../../core-ui';

type Props = {};

type State = {|
  username: string,
  password: string,
|};

// eslint-disable-next-line
class LoginScreen extends React.Component<Props, State> {
  constructor() {
    super(...arguments);
    this.state = {
      username: '',
      password: '',
    };
  }

  _onSubmit = () => {
    const {username, password} = this.state;
    Alert.alert(
      'Submission Success!',
      `Your username is ${username}, and your password is ${password}`,
    );
  };

  _onChangeText = (stateToChange) => (text) => {
    this.setState({
      [stateToChange]: text,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextField
          placeholder="Username"
          onChangeText={this._onChangeText('username')}
        />
        <TextField
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={this._onChangeText('password')}
        />
        <Button text="Submit" onPress={this._onSubmit} />
      </View>
    );
  }
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

export default LoginScreen;
