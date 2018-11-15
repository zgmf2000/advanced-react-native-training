// @flow

import React, {Component} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

import {WHITE, BLUE_SEA} from '../../constants/colors';
import Logo from '../../images/logo.png';

type Props = {
  token: string;
  navigation: {
    navigate: (route: string) => void;
  };
};

class Authentication extends Component<Props, *> {
  componentDidMount() {
    // TODO: navigate according to whether token exist
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 1500);
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: WHITE,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image source={Logo} style={{height: 150}} resizeMode="contain" />
        <ActivityIndicator size="large" color={BLUE_SEA} />
      </View>
    );
  }
}

const mapStateToProps = (state: *) => {
  return {
    token: state.login.token,
  };
};
const AuthContainer = connect(mapStateToProps)(Authentication);
AuthContainer.displayName = 'Authentication';
export default AuthContainer;
