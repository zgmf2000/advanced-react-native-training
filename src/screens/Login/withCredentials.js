// @flow

import * as React from 'react';
import {Alert} from 'react-native';

type State = {|
  username: string,
  password: string,
|};

function withCredentials<T>(Component: React.ComponentType<T>) {
  return class Enhancer extends React.Component<T, State> {
    constructor() {
      super(...arguments);
      this.state = {
        username: '',
        password: '',
      };
    }

    _onChangeText = (stateToChange: string) => (text: string) => {
      this.setState({
        [stateToChange]: text,
      });
    };

    _onSubmit = () => {
      const {username, password} = this.state;
      Alert.alert(
        'Submission Success!',
        `Your username is ${username}, and your password is ${password}`,
      );
    };

    render() {
      const {username, password} = this.state;
      return (
        <Component
          username={username}
          password={password}
          onChangeText={this._onChangeText}
          onSubmit={this._onSubmit}
          {...this.props}
        />
      );
    }
  };
}

export default withCredentials;
