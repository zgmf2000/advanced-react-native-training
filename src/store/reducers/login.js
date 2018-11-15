// @flow

import type {LoginAction, LoginState} from '../../types';


const INITIAL_STATE: LoginState = {
  email: 'email@email.com',
  password: 'password',
  token: '',
};

export default (state: LoginState = INITIAL_STATE, action: LoginAction) => {
  const {type, payload} = action;
  switch (type) {
    case 'LOGIN_USER':
      const isTokenValid = payload.email === 'admin@email.com' && payload.password === '1234';
      return {
        ...state,
        email: payload.email,
        password: payload.password,
        token: isTokenValid,
      };
    case 'LOGOUT_USER':
      return INITIAL_STATE;
    default:
      return state;
  }
};
