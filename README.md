## MiniForm

We're going to write reusable form that will accept

```js
type Props = {
  initialValues: {[key: string]: any},
  validation: {[key: string]: (value: any) => boolean},
};
```

First, I will give you an example how do we write one. Using `Render Props`.

```js
class MiniForm extends React.Component<Props, State> {
  constructor() {
    super(...arguments);
    this.state = {
      values: this.props.initialValues || {},
      errors: null,
    };
  }

  render() {
    let {children} = this.props;
    let setValue = this._setValue;
    return children({
      ...this.state,
      setValue,
    });
  }

  /*
    @private
    setValues is trigged right after user changes the input
  */

  _setValue = (key, value) => {
    let isValid = this._runValidation(key, value);
    this.setState((state) => ({
      ...state,
      values: {
        ...state.values,
        [key]: value,
      },
      errors: {
        ...state.errors,
        [key]: isValid || !value ? null : `${key} is invalid`,
      },
    }));
  };

  _runValidation = (key, value) => {
    let {validation} = this.props;
    if (validation[key]) {
      return validation[key](value);
    } else {
      return value;
    }
  };
}

export default MiniForm;
```

And let's refactor our login to use `MiniForm`

```js
function Login() {
  return (
    <MiniForm
      initialValues={{email: '', password: ''}}
      validation={{email: () => false, password: () => false}}
    >
      {({values, setValue, errors}) => {
        return <LoginCode />;
      }}
    </MiniForm>
  );
}
```

So, your task is to:

1. Refactor it to use `hoc`
2. Refactor it to use `Context`
3. Refactor it to use `reducer-pattern`
4. Pick one to combine: `hoc` combine it with `reducer pattern` || `context` combine it with `hoc` || just pick one of your favorite
