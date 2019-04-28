import React, { Component } from 'react'
import { Consumer } from '../helpers/context'

class SubChild extends Component {
  render () {
    return (
      <Consumer>{
        ({ title }) =>
        <div>
          <h1>Title: { title }</h1>
        </div>
      }</Consumer>
    )
  }
}

export default SubChild
