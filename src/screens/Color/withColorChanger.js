// @flow

import * as React from 'react';

type State = {
  color: string,
};

function withColorChanger<T>(Component: React.ComponentType<$Diff<any, any>>) {
  return class Enhancer extends React.Component<T, State> {
    constructor() {
      super(...arguments);
      this.state = {
        color: '#ffc425',
      };
    }

    render() {
      return (
        <Component
          onColorChange={this._getRandomColor}
          color={this.state.color}
          {...this.props}
        />
      );
    }

    _getRandomColor = () => {
      let letters = '0123456789ABCDEF';
      let randomColor = '#';
      for (var i = 0; i < 6; i++) {
        randomColor += letters[Math.floor(Math.random() * 16)];
      }
      this.setState({color: randomColor});
    };
  };
}

export default withColorChanger;
