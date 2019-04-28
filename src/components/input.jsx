import React from 'react'

class IInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 'hello' };
  }

  changeValue (e) {
    this.setState({
      value: e.target.value
    })
  }

  _change () {
    this.setState({ value: this.input.value });
  }
  // 受控
  // render() {
  //   return <input type='text' value={ this.state.value } onChange = {(e) => this.changeValue(e)}/>;
  // }

  // 非受控
  render () {
    return (<input
      type='text'
      defaultValue={ this.state.value }
      onChange={ this._change.bind(this) }
      ref={ input => this.input = input }/>
    );
  }
};

export default IInput


