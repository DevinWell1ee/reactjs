import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

class Event extends Component {
  constructor (props) {
    super(props)

    this.state = {
      number: 1
    }

    this._handleClick = this.handleClick.bind(this, 'xxx')
  }

  handleClick (value) {
    console.log(value)
    console.log('button click')
    console.log(this.state.number)
  }

  render () {
    return (
      <div>
        <button onClick={ this.handleClick.bind(this) }>event click</button>
        <button onClick={ this._handleClick }>event click</button>
        <button onClick={ () => this.handleClick('xxx') }>event click</button>
      </div>
    )
  }
}



export default Event
