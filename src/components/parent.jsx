import React, { Component } from 'react'
import Child from './child'

import { Provider } from '../helpers/context';

const context = { title: 'test new context api' };

class Parent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      number: 1
    }
  }

  changeNumber(number) {
    /* this.setState({ // 异步
      number
    }, () => {
      console.log('nextTick')
    }) */

    this.setState((state, props) => {
      return { number }
    })
  }

  render () {
    return (
      <Provider value={ context }>
        <div>
          <Child
            number={ this.state.number }
            changeNumber={ number => this.changeNumber(number) }/>
        </div>
      </Provider>
    )
  }
}

export default Parent


