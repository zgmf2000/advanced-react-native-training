// @flow

import * as React from 'react';

type Store = {
  getState: () => Object,
  subscribe: () => Function,
  dispatch: () => void,
};

type ProviderProps = {
  store: Store,
  children: React$Node,
};

const Reduct = React.createContext();

let Provider = (props: ProviderProps) => {
  const {children, store} = props;

  return <Reduct.Provider value={store}>{children}</Reduct.Provider>;
};

let connect = (mapStateToProps: Function, mapDispatchToProps: Function) => {
  return (Component: React.ComponentType<*>) => {
    return class Enhancer extends React.Component<*, *> {
      unsubscribe: () => void;

      static contextType = Reduct;

      constructor() {
        super(...arguments);
        this.unsubscribe = () => {};
      }

      componentDidMount() {
        let store = this.context;
        this.unsubscribe = store.subscribe(this._handleUpdate);
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      _handleUpdate = () => {
        this.forceUpdate();
      };

      render() {
        let store = this.context;
        let derivedState = mapStateToProps(store.getState());
        let derivedAction = mapDispatchToProps(store.dispatch);
        return (
          <Component {...derivedAction} {...derivedState} {...this.props} />
        );
      }
    };
  };
};

export {Provider, connect};
