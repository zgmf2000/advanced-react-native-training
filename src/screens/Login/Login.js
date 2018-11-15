// @flow

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {connect} from 'react-redux';

import {Button} from '../../core-ui';
import {WHITE, BLUE_SEA, LIGHT_GREY} from '../../constants/colors';
import Logo from '../../images/logo.png';
import type {LoginAction, RootState} from '../../types';

type State = {
  email: string;
  password: string;
  activeTextInput: 'EMAIL' | 'PASSWORD' | null;
};

type LoginPayload = {
  email: string;
  password: string;
};

type Props = {
  login: (payload: LoginPayload) => void;
  logout: () => void;
  email: string;
  password: string;
  token: boolean;
};

class Login extends Component<Props, State> {
  state = {
    email: '',
    password: '',
    activeTextInput: null,
  };

  render() {
    const {email, password, activeTextInput} = this.state;
    const {email: emailPlaceholder, password: passwordPlaceholder} = this.props;

    return (
      <View style={styles.root}>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.header}>
            <Image source={Logo} style={{height: 200}} resizeMode="contain" />
          </View>
          <View>
            <Text>Username or Email</Text>
            <TextInput
              value={email}
              placeholder={emailPlaceholder}
              onChangeText={(email) => this.setState({email})}
              onFocus={() => this._setActiveTextInput('EMAIL')}
              style={[
                styles.textInput,
                activeTextInput === 'EMAIL' && styles.activeTextInput,
              ]}
            />
            <Text>Password</Text>
            <TextInput
              secureTextEntry
              value={password}
              placeholder={passwordPlaceholder}
              onChangeText={(password) => this.setState({password})}
              onFocus={() => this._setActiveTextInput('PASSWORD')}
              style={[
                styles.textInput,
                activeTextInput === 'PASSWORD' && styles.activeTextInput,
              ]}
            />
          </View>
          {this._renderButton()}
        </KeyboardAvoidingView>
      </View>
    );
  }

  _renderButton() {
    const {token} = this.props;

    if (token) {
      return (<Button text="SIGN OUT" onPress={this._onLogout} />);
    }

    return (<Button text="SIGN IN" onPress={this._onLogin} />);
  }

  _onLogout = () => {
    this.setState({
      email: '',
      password: '',
      activeTextInput: null,
    });

    this.props.logout();
  };

  _onLogin = () => {
    const {email, password} = this.state;
    this.props.login({
      email, password,
    });
  };

  _setActiveTextInput(activeTextInput: 'EMAIL' | 'PASSWORD' | null) {
    this.setState({
      activeTextInput,
    });
  }
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 40,
    backgroundColor: WHITE,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
  },
  activeTextInput: {
    borderBottomColor: BLUE_SEA,
  },
  textInput: {
    height: 40,
    borderBottomColor: LIGHT_GREY,
    borderBottomWidth: 2,
    marginBottom: 50,
  },
});

const mapStateToProps = (state: RootState) => {
  return {
    email: state.login.email,
    password: state.login.password,
    token: state.login.token,
  };
};

type LoginDispatch = (action: LoginAction) => {};

const mapDispatchToProps = (dispatch: LoginDispatch) => {
  return {
    login: ({email, password}) => dispatch({
      type: 'LOGIN_USER',
      payload: {
        email,
        password,
      },
    }),
    logout: () => dispatch({type: 'LOGOUT_USER', payload: {}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
