// @flow

type LoginState = {
  email: string;
  password: string;
  token: string | boolean;
};

type LoginAction =
  | {
      type: 'LOGIN_USER';
      payload: {
        email: string;
        password: string;
      };
    }
  | {
      type: 'LOGOUT_USER';
      payload: {
        email: string;
        password: string;
      };
    };

const INITIAL_STATE: LoginState = {
  email: 'email@email.com',
  password: 'password',
  token: '',
};

export default function loginReducer(
  state: LoginState = INITIAL_STATE,
  action: LoginAction
) {
  let {type} = action;
  let payload = action.payload && action.payload;
  switch (type) {
    case 'LOGIN_USER':
      return {
        ...state,
        //$FlowFixMe
        email: payload && payload.email,
        //$FlowFixMe
        password: payload && payload.password,
        token:
          payload &&
          payload.email === 'admin@admin.com' &&
          (payload && payload.password === '1234')
            ? true
            : false,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
}
