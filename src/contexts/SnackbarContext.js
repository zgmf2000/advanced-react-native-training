import * as React from 'react';
import SnackBar from 'react-native-snackbar';

const {Provider, Consumer} = React.createContext();

export default class SharedSnackbarProvider extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  _openSnackbar = (message) => {
    SnackBar.show({
      title: message,
      duration: SnackBar.LENGTH_SHORT,
    });
  };

  _closeSnackbar = () => {
    SnackBar.dismiss();
  };

  render() {
    const {children} = this.props;

    return (
      <Provider
        value={{
          openSnackbar: this._openSnackbar,
          closeSnackbar: this._closeSnackbar,
        }}
      >
        <Consumer>
          {(values) => {
            return React.cloneElement(children, {...values});
          }}
        </Consumer>
      </Provider>
    );
  }
}
